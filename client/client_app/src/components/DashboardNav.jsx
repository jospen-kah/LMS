import React, { useState } from "react";
import { Link } from "react-router-dom"; // Fix incorrect import
import "./DashboardNav.css";
import { CircleCheckBig, Menu, User, X } from "lucide-react";
import ProgressBar from "./progressBar";

function DashboardNav() {
    const [click, setClick] = useState(false);
    

    const handleClick = () => setClick(!click);

    return (
        <div className="dashnav">
            <div className="nav-head" onClick={handleClick}>
                {click ? <X /> : <Menu />}
                <h2>LMS</h2>
            </div>

            <div className="dash-links">
                <div className="links">
                    <CircleCheckBig color="#0f0" />
                    <Link to={`/dashboard/module1`} className="dash-link">
                        Modules 1
                    </Link>
                </div>
                <div className="links">
                    <CircleCheckBig color="#0f0" />
                    <Link to={`/dashboard/module2`} className="dash-link">
                        Modules 2
                    </Link>
                </div>
                <div className="links">
                    <CircleCheckBig />
                    <Link to={`/dashboard/module3`} className="dash-link">
                        Modules 3
                    </Link>
                </div>
                <div className="links">
                    <CircleCheckBig />
                    <Link to={`/dashboard/module4`} className="dash-link">
                        Modules 4
                    </Link>
                </div>
            </div>

           <ProgressBar />

            <div className="nav-profile">
                <User size={35} />
                <p>Profile</p>
            </div>
        </div>
    );
}

export default DashboardNav;
