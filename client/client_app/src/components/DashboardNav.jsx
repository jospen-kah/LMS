import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DashboardNav.css";
import { Menu, User, X } from "lucide-react";
import ProgressBar from "./progressBar";
import Module from "./Module";

function DashboardNav({ setSelectedLesson }) {  // Ensure setSelectedLesson is received as a prop
    const [click, setClick] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"))
    const courseId = localStorage.getItem("activeCourseId")

    const handleClick = () => setClick(!click);

    return (
        <div className="dashnav">
            <div className="nav-head" onClick={handleClick}>
                {click ? <X /> : <Menu />}
                <h2>
                    <Link to={`/dashboard/${courseId}`}>
                        LMS
                    </Link>
                </h2>
            </div>

            {/* Pass setSelectedLesson to Module */}
            <Module setSelectedLesson={setSelectedLesson} />

            <ProgressBar />
            <Link to={`/profile/user/${user.id}`} className="profile-link">
                <div className="nav-profile">
                    <User size={35} fill="#fff" />
                    <p>Profile</p>
                </div>
            </Link>
        </div>
    );
}

export default DashboardNav;
