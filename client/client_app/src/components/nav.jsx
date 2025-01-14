import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className='Navbar'>
            <div className='logo' >
                <h1>Logo</h1>
            </div>

            <div className='nav-content'>
                <NavLink
                    to='Program'
                    className={'community'}
                    end>
                    PROGRAM
                </NavLink>

                <NavLink
                    to='Community'
                    className={'community'}
                    end>
                    COMMUNITY
                </NavLink>

                <NavLink
                    to='About'
                    className={'community'}
                    end>
                    ABOUT
                </NavLink>
            </div>
            <div className='login'>
                <nav>
                    <Link to="/login">Login To Portal</Link>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;