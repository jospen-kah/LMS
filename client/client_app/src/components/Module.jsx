import axios from 'axios';
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import "./Module.css";
import { Link } from 'react-router';

function Module({ setSelectedLesson }) {
    const [modules, setModules] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [lessons, setLessons] = useState({});
    const [expandedModule, setExpandedModule] = useState(null);

    const courseId = localStorage.getItem('activeCourseId');

    useEffect(() => {
        axios.get(`http://localhost:5000/module/${courseId}`)
            .then((response) => {
                setModules(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [courseId]);

    const fetchLessons = async (moduleId) => {
        try {
            const url = `http://localhost:5000/lesson/${moduleId}`;
            const response = await axios.get(url);
            setLessons((prevLessons) => ({
                ...prevLessons,
                [moduleId]: response.data,
            }));
        } catch (error) {
            console.error("Error fetching lessons:", error);
        }
    };

    const toggleExpand = (moduleId) => {
        if (expandedModule === moduleId) {
            setExpandedModule(null);
        } else {
            setExpandedModule(moduleId);
            if (!lessons[moduleId]) {
                fetchLessons(moduleId);
            }
        }
    };

    // Pass the clicked lesson to parent (Dashboard)
    const handleLessonClick = (lesson) => {
        setSelectedLesson(lesson); // Send the lesson to the parent component (Dashboard)
    };

    if (loading) return <p>Loading Modules ...</p>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='modules'>
            {modules.map((module) => (
                <div key={module._id} className="modules-content">
                    <div className="module-header" onClick={() => toggleExpand(module._id)}>
                        <h3>{module.title}</h3>
                        {expandedModule === module._id ? <ChevronUp /> : <ChevronDown />}
                    </div>

                    {expandedModule === module._id && lessons[module._id] && (
                        <ul className="lessons-list">
                            {lessons[module._id].map((lesson, index) => (
                                
                                    <li key={index} className="lesson-item" onClick={() => handleLessonClick(lesson)}>
                                        {lesson.title}
                                    </li>
                                
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Module;
