import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import AuthContext from "../components/Auth"; // ✅ Ensure correct import

const Login = () => {
    const { login } = useContext(AuthContext); // ✅ Ensure AuthProvider wraps App
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await login(email, password);
        } catch (error) {
            setError("Invalid Credentials. Please try again.");
        }
    };

    return (
        <div className="main-login">
            <div className="info">
                <div className="head">
                    <h1>Login</h1>
                    <p>Welcome back! Please log in to access your account</p>
                </div>
                <div className="details">
                    <form onSubmit={handleSubmit} className="login-form">
                        <p>Email</p>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            name="email"
                            placeholder="Enter Your Email"
                        />
                        <p>Password</p>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            name="password"
                            placeholder="Enter Your Password"
                        />
                        
                        <div className="recall">
                            <div className="remember">
                                <input type="checkbox" />
                                <p>Remember Me</p>
                            </div>
                            <nav>
                                <Link to="/">
                                    <p className="forgotten">Forgot Password?</p>
                                </Link>
                            </nav>
                        </div>

                        {error && <p className="error-message">{error}</p>} 
                        
                        <button type="submit" className="login-btn">Login</button> 
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
