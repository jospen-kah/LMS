import { Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
const Registration = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post(
                "http://localhost:5000/auth/register/user",
                { username, email, password }, 
                {
                    headers: {
                        'Content-Type': 'application/json', 
                    },
                }
            );
    
            
            setMessage(response.data.message);
            navigate('/login');
        } catch (error) {
            
            if (error.response) {
                
                console.error('Error Response:', error.response.data);
                setMessage(error.response.data.message || 'Something went wrong.');
            } else if (error.request) {
                
                console.error('No Response:', error.request);
                setMessage('Server is not responding. Please try again later.');
            } else {
                // General error
                console.error('Error:', error.message);
                setMessage('An error occurred. Please try again.');
            }
        }
    };
    



    return (
        <div className="main-login">
            <div className="info">
                <div className='head'>
                    <h1>Sign Up</h1>
                    <p>Create an Account to unlock exclusive features!</p>
                </div>
                <div className="details">
                    <form onSubmit={handleSubmit} className="login-form">
                        <p>Name</p>
                        <input type="text" value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required name="username" placeholder='Enter Your Full Name'/>
                        <p>Email</p>
                        <input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required name="email" placeholder='Enter your Email' />
                        <p>Password</p>
                        <input type="password" value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required name="password" placeholder="Enter your password"/>
                         <div className="recall">
                            <div className="remember">
                                <input type="checkbox"/>
                                <p>Remember Me</p>
                            </div>

                            
                        </div>

                        <button type="submit" className="signin-button">Sign Up</button>
                        {message && <p className='error'>{message}</p>}

                    </form>
                    
                </div>
                <p> Already have an Account? 
                    <Link to ='/login'>Sign in</Link>
                </p>
            </div>
        </div>

    )

}

export default Registration;


