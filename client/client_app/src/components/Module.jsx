import axios from 'axios';
import { ChevronUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import "./Module.css";

function Module({ setSelectedLesson, setSelectedQuiz }) { // ✅ Accept setSelectedQuiz
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
            const response = await axios.get(`http://localhost:5000/lesson/${moduleId}`);
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

    const handleLessonClick = (lesson) => {
        setSelectedLesson(lesson);
        setSelectedQuiz(null); // ✅ Reset quiz when a lesson is selected
    };

    const handleQuizClick = (moduleId) => {
        setSelectedQuiz(moduleId); // ✅ Set quiz in Dashboard state
        setSelectedLesson(null);
    };

    if (loading) return <p>Loading Modules ...</p>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='modules'>
            {modules.map((module) => (
                <div key={module._id} className="modules-content">
                    <div className="module-header" onClick={() => toggleExpand(module._id)}>
                        <h3>{module.title}</h3>
                        <span className={`chevron-icon ${expandedModule === module._id ? "rotate-up" : "rotate-down"}`}>
                            <ChevronUp size={35} />
                        </span>
                    </div>

                    {expandedModule === module._id && lessons[module._id] && (
                        <ul className="lessons-list">
                            {lessons[module._id].map((lesson, index) => (
                                <li key={index} className="lesson-item" onClick={() => handleLessonClick(lesson)}>
                                    {lesson.title}
                                </li>
                            ))}
                            {/* ✅ Take Quiz Button (Appears After Lessons) */}
                            <li className="lesson-item quiz-item" onClick={() => handleQuizClick(module._id)}>
                                <p>📝 Take Quiz</p>
                            </li> 
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Module;
