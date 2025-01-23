import {Link} from 'react-router-dom';
// import { Mail } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin , FaPhone, FaLocationDot} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="container-1">
                    <div className="footer-contact">
                        <div className='logo'>
                            <p>LMS</p>
                        </div>
                        <div className="contact">
                            <div className='con'>
                            <MdEmail />
                            <p>Emails</p>
                            </div>
                            <div className='con'>
                            <FaPhone />
                            <p>Phone</p>
                            </div>
                            <div className='con'>
                            <FaLocationDot />
                            <p>Address</p>
                            </div>
                           
                        </div>
                    </div>
                    <div className="footer-links">
                        <div className="links">
                        <Link to="/" className="link">Home</Link>
                        <Link to="/all-courses">Courses</Link>
                        <Link to="/benefits">Benefits</Link>
                        <Link to="/testimonials">Our Testimonial</Link>
                        <Link to="/faq">Our FAQ</Link>
                        </div>
                        <div className="links">
                        <Link to="/about" className="link">About Us</Link> 
                        <Link to="/about">Company</Link>
                        <Link to="/about">Achievements</Link>
                        <Link to="/about">Our Goals</Link>
                        </div>
                        <div  className="social">
                            <p>Follow Us</p>
                            < div className='social-icons'>
                            <div className='facebook'>
                                <Link to="/facebook.com"><FaFacebook style={{color: 'black'}}/></Link>
                            </div>
                            <div className='facebook'>
                                <Link to="/x.com"><FaTwitter style={{color: 'black'}}/></Link>
                            </div>
                            <div className='facebook'>
                                <Link to="/linkedin.com"><FaLinkedin style={{color: 'black'}}/></Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                 <p>© 2025 All rights reserved</p>
            </div>
            
        </footer>
    )
}
export default Footer;