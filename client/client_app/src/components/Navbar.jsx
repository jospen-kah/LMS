// import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

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
      
            <NavLink to="/" end className={({isActive}) => (isActive) ? "active" : "inactive"}>Home</NavLink>
            <NavLink to="/community" end className={({isActive}) => isActive ?'active': 'inactive'}>Community</NavLink>
            <NavLink to="/about" end className={({isActive}) => isActive ?'active': 'inactive'}>About</NavLink>
        </nav>
    <div  className="portal">
        <nav>
             <NavLink to="/login" end>Login to portal</NavLink>
        </nav>
    </div>
        
    </div>
   
  );
};

export default Navbar;
