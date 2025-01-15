import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleNavigation = (event) => {
      const path = event.target.value;
      if (path) navigate(path);
    };
  return ( 
    <div className="Navbar">
        <div className='logo' >
            <h1>LMS</h1>
        </div>

        <div className="all-courses">
                    <select className="course" onChange={handleNavigation} defaultValue="">
                            <option value="/all-courses"> All Courses</option>
                            <option value="/leadership">Leadership</option>
                            <option value="/business-and-Entrepreneuship"> Business and Entreneurship</option>
                            <option value="/personal-development">Personal Development</option>
                        </select>
        </div>
         <nav className="navigate">
      
            <Link to="/">Home</Link>
            <Link to="/community">Community</Link>
            <Link to="/about">About</Link>
        </nav>
    <div  className="portal">
        <nav>
             <Link to="/login">Login to portal</Link>
        </nav>
    </div>
        
    </div>
   
  );
};

export default Navbar;
