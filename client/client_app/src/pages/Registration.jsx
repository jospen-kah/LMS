import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

const Registration = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [course, setCourse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/auth/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password,course })
            });
            const data = await response.json();
            if (response.ok) {
                setMessage(data.message)
                navigate('/login');
            } else {
                setMessage(data.message || 'Something went wrong')
            }
        } catch (error) {
            console.error('Error', error)
            setMessage('An error occured. Please try again. ');
        }
    }



    return (
        <div className="main-login">
            <div className="welcome">
                <h1>WELCOME TO YOUR PORTAL</h1>
                <div className='line'></div>
            </div>
            <div className="info">
                <h1>Create Your Account</h1>
                <div className="google">
                    <p>Google</p>
                </div>
                <div className='continue'>
                    <div className='line'></div>
                    <p>Or continue with</p>
                    <div className='line'></div>
                </div>
                <div className="details">
                    <form onSubmit={handleSubmit} className="login-form">
                        <p>Name</p>
                        <input type="text" value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required name="username"></input>
                        <p>Email</p>
                        <input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required name="email"></input>
                        <p>Password</p>
                        <input type="password" value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required name="password"></input>

                        <div>
                            <label>Select Course:</label>
                            <select
                                name="course"
                                value={course}
                                onChange={(e) => setCourse(e.target.value)}
                                required
                            >
                                <option value="">-- Select a Course --</option>
                                <option value="Leadership">Leadership</option>
                                <option value="Entrepreneurship">Entrepreneurship</option>
                                <option value="Technology">Technology</option>
                            </select>
                        </div>
                        <button type="submit" className="signin-button">Sign Up</button>
                        {message && <p>{message}</p>}

                    </form>
                    <div className="recall">
                        <nav>
                            <Link to="/"><p className='forgotten'>Forgot Password?</p></Link>
                        </nav>
                    </div>
                </div>

                <div className='unregister'>
                    <p>Already Have an Account?</p>
                    <nav>
                        <Link to="/login">Sign In</Link>
                    </nav>
                </div>

            </div>
        </div>

    )

}

export default Registration;


