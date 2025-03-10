import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import DashboardNav from "../components/DashboardNav";
import Quiz from "../components/Quiz"; // ✅ Import Quiz component
import './Dashboard.css';

function Dashboard() {
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [selectedQuiz, setSelectedQuiz] = useState(null); // ✅ Track quiz selection

    useEffect(() => {
        if (selectedQuiz) {
            setSelectedLesson(null); // Hide lesson when quiz is selected
        }
    }, [selectedQuiz]);

    return (
        <div className="dashboard-container">
            {/* Sidebar Navigation */}
            <nav className="sidebar">
                <DashboardNav 
                    setSelectedLesson={setSelectedLesson} 
                    setSelectedQuiz={setSelectedQuiz} // ✅ Pass setSelectedQuiz
                />
            </nav>

            {/* Main Content Area */}
            <div className="dashboard-content">
                {selectedQuiz ? (
                    <Quiz moduleId={selectedQuiz} setSelectedQuiz={setSelectedQuiz} /> // ✅ Display quiz in content
                ) : selectedLesson ? (
                    <div className="lesson-content">
                        <h2>{selectedLesson.title}</h2>
                        <p>{selectedLesson.content}</p>

                        {selectedLesson.video && (
                            <div className="lesson-video">
                                <iframe
                                    width="100%"
                                    height="400"
                                    src={selectedLesson.video.replace("watch?v=", "embed/")}
                                    title="Lesson Video"
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}
                    </div>
                ) : (
                    <Outlet />
                )}
            </div>
        </div>
    );
}

export default Dashboard;
