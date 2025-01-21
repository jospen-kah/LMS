// import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MoveRight, Star } from "lucide-react"

const Navbar = () => {
    const navigate = useNavigate();

    const handleNavigation = (event) => {
      const path = event.target.value;
      if (path) navigate(path);
    };
  return ( 
    <div className="navbar">
        <div className="start"> 
            <p>Free Courses, Get it now! 
               </p> <MoveRight />
        </div>
        <div className="nav-sign">
          <div className="nav-logo">
            <div className="logo">LMS</div>
            <div className="nav-content">
               <nav className="navigate">
        
                <NavLink to="/" end className={({isActive}) => (isActive) ? "active" : "inactive"}>Home</NavLink>
                <NavLink to="/all-courses" end className={({isActive}) => isActive ?'active': 'inactive'}>Courses</NavLink>
                <NavLink to="/community" end className={({isActive}) => isActive ?'active': 'inactive'}>Community</NavLink>
                <NavLink to="/about" end className={({isActive}) => isActive ?'active': 'inactive'}>About</NavLink>
                
               </nav>
            </div>
          </div>
          <div className="sign">
            <div className="sign-up">Sign Up</div>
            <div className="login">Login</div>
          </div>
        </div>

     
    
    </div>
      
         

   
  )
};

export default Navbar;
