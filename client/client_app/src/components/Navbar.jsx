import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Menu } from 'lucide-react';
import Button from './Button';
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton)
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='logo-content'>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              LMS
            </Link>
          </div>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <X /> : <Menu />}
          </div>
          <div className='nav-content'>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link>
              </li>
              <li className='nav-item'>
                <Link to="/courses" className='nav-links' onClick={closeMobileMenu}>Courses</Link>
              </li>
              <li className='nav-item'>
                <Link to="/about" className='nav-links' onClick={closeMobileMenu}>About</Link>
              </li>
              <li className='nav-item-1'>
                <Link to="/register" className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
              </li>
              <li className='nav-item-1'>
                <Link to="/login" className='nav-links-mobile-login' onClick={closeMobileMenu}>Login</Link>
              </li>
            </ul>
          </div>
          <div className='button-content'>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
