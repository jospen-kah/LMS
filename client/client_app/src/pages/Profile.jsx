import { NotepadText } from 'lucide-react';
import React from 'react';
import './Profile.css';

function Profile() {
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
          <p>hello</p>
        </div>
      </div>
      <div className='hm-content-2'>

      </div>
    </div>
  )
}

export default Profile;
