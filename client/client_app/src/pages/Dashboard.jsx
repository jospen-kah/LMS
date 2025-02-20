import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardNav from "../components/DashboardNav";
import './Dashboard.css'; 

function Dashboard() {
    const [selectedLesson, setSelectedLesson] = useState(null); // ✅ Define setSelectedLesson

    return (
        <div className="dashboard-container">
            <nav className="sidebar">
                {/* Pass setSelectedLesson as a prop to DashboardNav */}
                <DashboardNav setSelectedLesson={setSelectedLesson} />
            </nav>

            <div className="dashboard-content">
                {/* Display the selected lesson content */}
                {selectedLesson ? (
                    <div className="lesson-content">
                        <h2>{selectedLesson.title}</h2>
                        <p>{selectedLesson.content}</p>
                    </div>
                ) : (
                    <Outlet /> // Default content
                )}
            </div>
        </div>
    );
}

export default Dashboard;
