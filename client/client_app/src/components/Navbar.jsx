import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MoveRight, Menu, SquareX } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  // const navigate = useNavigate();

  // const handleNavigation = (event) => {
  //   const path = event.target.value;
  //   if (path) navigate(path);
  // };
  return (
    <div className="navbar">
      <div className="start">
        <p>Free Courses, Get it now!
        </p> <MoveRight />
      </div>
      <div className="nav-sign">
        
          <div className="menu" onClick={toggleMenu}>
            {menuOpen ? <SquareX /> : < Menu color="#000" />}
          </div>
          
            {menuOpen && (
              <div className="menu-toggle">
            <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
            <NavLink to="/all-courses" onClick={toggleMenu}>Courses</NavLink>
            <NavLink to="/community" onClick={toggleMenu}> Community</NavLink>
            <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
             <div style={{ width:"100%", height:"100vh", opacity:"0.8" }}/>
             </div>
           
            )}
        
      
        <div className="nav-logo">
          <div className="logo">LMS</div>
          <div className="nav-content">
            <nav className="navigate">

              <NavLink to="/" end className={({ isActive }) => (isActive) ? "active" : "inactive"}>Home</NavLink>
              <NavLink to="/all-courses" end className={({ isActive }) => isActive ? 'active' : 'inactive'}>Courses</NavLink>
              <NavLink to="/community" end className={({ isActive }) => isActive ? 'active' : 'inactive'}>Community</NavLink>
              <NavLink to="/about" end className={({ isActive }) => isActive ? 'active' : 'inactive'}>About</NavLink>

            </nav>
          </div>
        </div>
        <div className="sign">
          <Link to="/register">
            <div className="sign-up">
              Sign Up
            </div>
          </Link>
          <Link to="/login">
            <div className="login">Login</div>
          </Link>
        </div>
      </div>
    </div>




  )
};

export default Navbar;
