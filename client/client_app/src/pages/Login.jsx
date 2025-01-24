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
            <div className="info">
                <div className='head'>
                    <h1>Login</h1>
                    <p>Welcome back! Please login in to access your account</p>
                </div>
                <div className="details">
                    <form onSubmit={handleSubmit} className="login-form">
                        <p>Email</p>
                        <input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required name="email" placeholder='Enter Your Email' />
                        <p>Password</p>
                        <input type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            name="password" placeholder='Enter Your password' />

                        <div className="recall">
                            <div className="remember">
                                <input type="radio"/>
                                <p>Remember Me</p>
                            </div>

                            <nav>
                                <Link to="/"><p className='forgotten'>Forgot Password?</p></Link>
                            </nav>
                        </div>

                        <button type="submit" className="signin-button" disabled={isLoading}>
                            {isLoading ? 'Signing In...' : 'Sign In'}
                        </button>
                        {message && <p className='message'>{message}</p>}
                    </form>


                </div>


            </div>

        </div>
    )
}

export default Login;
