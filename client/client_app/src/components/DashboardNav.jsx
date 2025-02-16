import React, { useState } from 'react'
import { Link } from 'react-router'
import './DashboardNav.css'
import { Menu, Presentation, User, X } from 'lucide-react';

function DashboardNav() {
    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click)
    return (
        <div className='dashnav'>
            <div className="nav-head" onClick={handleClick}>
                {click ? <X /> : <Menu />}
                <h2>LMS</h2>
            </div>
            <div className='dash-links'>
                <div className="links">
                    < Presentation />
                    <Link to='/dashboard/${}' className='dash-link'>Modules</Link>
                </div>
                <div className="links">
                    < Presentation />
                    <Link to='/' className='dash-link'>Modules</Link>
                </div>
                <div className="links">
                    < Presentation />
                    <Link to='/' className='dash-link'>Modules</Link>
                </div>
                <div className="links">
                    < Presentation />
                    <Link to='/' className='dash-link'>Modules</Link>
                </div>
                


            </div>
            <div className="nav-profile">
                <User size={35}/>
                <p>Profile</p>
            </div>
        </div>
    )
}

export default DashboardNav
