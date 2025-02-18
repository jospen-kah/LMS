import { Link } from 'react-router-dom';
// import { Mail } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import './Footer.css';


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
                                <p>lms@gmail.org</p>
                            </div>
                            <div className='con'>
                                <FaPhone />
                                <p>+(237) 6555555</p>
                            </div>
                            <div className='con'>
                                <FaLocationDot />
                                <p>Buea</p>
                            </div>

                        </div>
                    </div>
                    <div className="footer-links">
                        <div className="links">
                            <Link to="/" className="link">Home</Link>
                            <Link to="/courses">Courses</Link>
                            <Link to="/benefits">Benefits</Link>
                            <Link to="/testimonial" >Testimonial</Link>
                            <Link to="/faq">FAQs</Link>
                        </div>
                        <div className="links">
                            <Link to="/about" className="link">About Us</Link>
                            <Link to="/about">Company</Link>
                            <Link to="/about">Achievements</Link>
                            <Link to="/about">Our Goals</Link>
                        </div>
                        <div className="social">
                            <p>Follow Us</p>
                            < div className='social-icons'>
                                <div className='facebook'>
                                    <Link to="https://www.facebook.com/"><FaFacebook style={{ color: 'black' }} /></Link>
                                </div>
                                <div className='facebook'>
                                    <Link to="https://x.com/"><FaTwitter style={{ color: 'black' }} /></Link>
                                </div>
                                <div className='facebook'>
                                    <Link to="https://www.linkedin.com/"><FaLinkedin style={{ color: 'black' }} /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='footer-end'>© 2025 All rights reserved</p>
            </div>

        </footer>
    )
}
export default Footer;