import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');
        try {
            const response = await fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
    
            if (response.ok) {
                if (data.course) {
                    setMessage(data.message);
                    localStorage.setItem("user", JSON.stringify(data));
                    console.log("Navigating to course portal:", data.course);
                    navigate(`/portal/${data.course}`);
                } else {
                    setMessage('Course information is missing from the response.');
                    console.error("Course field is missing in the response:", data);
                }
            } else {
                setMessage(data.message || 'Something went wrong');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };
    




    return (
        <div className="main-login">
            <div className="welcome">
                <h1>WELCOME TO YOUR PORTAL</h1>
                <div className='line'></div>
            </div>
            <div className="info">
                <h1>Sign In To Your Account</h1>
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
                        <p>Email</p>
                        <input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required name="email"></input>
                        <p>Password</p>
                        <input type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            name="password"></input>
                        <button type="submit" className="signin-button" disabled={isLoading}>
                            {isLoading ? 'Signing In...' : 'Sign In'}
                        </button>
                        {message && <p className='message'>{message}</p>}
                    </form>
                    <div className="recall">
                        <div className="remember">
                            <div className='tick'></div>
                            <p>Remember Me</p>
                        </div>

                        <nav>
                            <Link to="/"><p className='forgotten'>Forgot Password?</p></Link>
                        </nav>
                    </div>

                </div>
                <div className='unregister'>
                    <p>No Account Yet?</p>
                    <nav>
                        <Link to="/register">Sign up</Link>
                    </nav>
                </div>

            </div>

        </div>
    )
}

export default Login;
