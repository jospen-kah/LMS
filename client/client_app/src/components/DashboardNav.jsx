import React, { useState } from "react";
import { Link } from "react-router-dom"; // Fix incorrect import
import "./DashboardNav.css";
import { ChevronDown, ChevronUp, CircleCheckBig, Menu, User, X } from "lucide-react";
import ProgressBar from "./progressBar";
import Module from "./Module";


function DashboardNav() {
    const [click, setClick] = useState(false);
    const [clickChevron, setClickChevron] = useState(true)


    const handleClick = () => setClick(!click);
    const handleChevron = () => setClickChevron(!clickChevron);

    return (
        <div className="dashnav">
            <div className="nav-head" onClick={handleClick}>
                {click ? <X /> : <Menu />}
                <h2>LMS</h2>
            </div>

            <div className="dash-links">
                <div className="links" onClick={handleChevron}>
                    <div className="link-content">
                        <CircleCheckBig color="#0f0" />
                        <Link to={`/dashboard/module1`} className="dash-link">
                           <Module />
                        </Link>
                    </div>
                    {clickChevron ? <ChevronDown /> : <ChevronUp />}
                </div>

                <div className="links" onClick={handleChevron}>
                    <div className="link-content">
                        <CircleCheckBig color="#0f0" />
                        <Link to={`/dashboard/module1`} className="dash-link">
                            Modules 1
                        </Link>
                    </div>
                    {clickChevron ? <ChevronDown /> : <ChevronUp />}
                </div>

                <div className="links" onClick={handleChevron}>
                    <div className="link-content">
                        <CircleCheckBig color="#fff" />
                        <Link to={`/dashboard/module1`} className="dash-link">
                            Modules 1
                        </Link>
                    </div>
                    {clickChevron ? <ChevronDown /> : <ChevronUp />}
                </div>

                <div className="links" onClick={handleChevron}>
                    <div className="link-content">
                        <CircleCheckBig color="#fff" />
                        <Link to={`/dashboard/module1`} className="dash-link">
                            Modules 1
                        </Link>
                    </div>
                    {clickChevron ? <ChevronDown /> : <ChevronUp />}
                </div>
            </div>

            <ProgressBar />
            <Link to="dashboard/user/profile" className="profile-link">
                <div className="nav-profile">
                    <User size={35} fill="#fff" />
                    <p>Profile</p>
                </div>
            </Link >

        </div>
    );
}

export default DashboardNav;
