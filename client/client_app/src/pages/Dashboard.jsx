import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import DashboardNav from "../components/DashboardNav";
import './Dashboard.css';
import { ChevronLeft, ChevronRight } from "lucide-react";

function Dashboard() {
    const [selectedLesson, setSelectedLesson] = useState(null); // ✅ Track selected lesson
    const [firstLesson, setFirstLesson] = useState(null); // ✅ Track first lesson from modules

    // Set the first lesson when it becomes available
    useEffect(() => {
        if (!selectedLesson && firstLesson) {
            setSelectedLesson(firstLesson);
        }
    }, [firstLesson, selectedLesson]);

    return (
        <div className="dashboard-container">
            <nav className="sidebar">
                {/* Pass setSelectedLesson & setFirstLesson to DashboardNav */}
                <DashboardNav 
                    setSelectedLesson={setSelectedLesson} 
                    setFirstLesson={setFirstLesson} // ✅ Pass first lesson setter
                />
            </nav>

            <div className="dashboard-content">
                {/* Display the selected lesson content */}
                {selectedLesson ? (
                    <div className="lesson-content">
                        <h2>{selectedLesson.title}</h2>
                        <p>{selectedLesson.content}</p>

                        {/* Video Section (if available) */}
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

                        <div className="lesson-navigation">
                            <button>
                                <ChevronLeft /> Previous
                            </button>
                            <button>
                                Next <ChevronRight />
                            </button>
                        </div>
                    </div>
                ) : (
                    <Outlet /> // Default content (renders `DashboardHome` if no lesson is selected)
                )}
            </div>
        </div>
    );
}

export default Dashboard;
