import {Link} from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin , FaPhone, } from "react-icons/fa6";
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
                            <p><MdEmail />Emails</p>
                            <p><FaPhone />Phone</p>
                            <p><FaLocationDot />Address</p>
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
                            <div className='facebook'>
                                <Link to="/facebook.com"><FaFacebook />n</Link>
                            </div>
                            <div className='twitter'>
                                <Link to="/x.com"><FaTwitter /></Link>
                            </div>
                            <div className='linkedin'>
                                <Link to="/linkedin.com"><FaLinkedin /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                 <p>© 2021 All rights reserved</p>
            </div>
            
        </footer>
    )
}
export default Footer;