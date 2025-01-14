import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log("Login Successfull");
        navigate('/Portal')
    }


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
                    <form className="login-form">
                        <p>Email</p>
                        <input type="email" name="email"></input>
                        <p>Password</p>
                        <input type="password" name="password"></input>

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
                    <button onClick = {handleLogin} className="signin-button">Sign In</button>
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
