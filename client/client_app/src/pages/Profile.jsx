import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NotepadText } from 'lucide-react';
import './Profile.css';
import CertificateDownload from '../components/certificate.';

function Profile() {
  const [username, setUsername] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [userId, setUserId] = useState('');

  // Fetch userId & username from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUserId(storedUser.id);
      setUsername(storedUser.username);
    }
  }, []);

  // Handle username update
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!newUsername.trim()) return;

    try {
      const response = await axios.put(`http://localhost:5000/auth/update-username/${userId}`, {
        username: newUsername,
      });

      const updatedUsername = response.data.user.username;
      setUsername(updatedUsername); // Update UI state

      // Update localStorage with new username
      const updatedUser = { ...JSON.parse(localStorage.getItem('user')), username: updatedUsername };
      localStorage.setItem('user', JSON.stringify(updatedUser));

      setNewUsername('');
      alert('Username updated successfully!');
    } catch (error) {
      console.error('Error updating username:', error);
      alert('Failed to update username');
    }
  };

  return (
    <div className='home-contents'>
      <div className='hm-content-1'>
        <div className='event'>
          <div className='upcoming-event'>
            <h4>Upcoming events</h4>
          </div>
          <div className='notepad-icon'>
            <NotepadText size={40}/>
            <p>No upcoming event</p>
          </div>
        </div>
        <div className='scores'>
          <p>Courses</p>
        </div>
      </div>

      <div className='hm-content-2'>
        <h1>My Profile</h1>
        <h2>Edit your profile</h2>
        <form className='profile-form' onSubmit={handleUpdate}>
          <div className='name-form'>
            <p>Full Name</p>
            <input 
              type='text' 
              placeholder='Enter your full name' 
              value={newUsername} 
              onChange={(e) => setNewUsername(e.target.value)} 
            />
          </div>
          <button type='submit'>Update</button>
        </form>
        <p>Current Username: <strong>{username}</strong></p>
      </div>

      <div className='hm-content-3'>
        <h2>Download Your Certificate</h2>
        <CertificateDownload />
      </div>
    </div>
  );
}

export default Profile;
