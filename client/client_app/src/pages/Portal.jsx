import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ProtectedRoute from '../Utils/ProtectedRoutes';
import Courses from '../components/courses';
import './Portal.css';

function Portal() {
    const { id } = useParams(); // Portal id
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/portal/${id}`, {
                    headers: { "Content-Type": "application/json" },
                });
                setUser(response.data.user);
                console.log("data: ", response.data.user);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching portal data: ", error);
                setLoading(false);
            }
        };
        fetchUserData();
    }, [id]);

    const handleStartCourse = (courseId) => {
        // Store the enrolled courses in localStorage if you want to keep track of them
        let enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];

        // Add the course ID to the enrolled courses if not already added
        if (!enrolledCourses.includes(courseId)) {
            enrolledCourses.push(courseId);
        }

        localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));

        // Navigate to the course dashboard with the user and course ID
        navigate(`/dashboard/${id}`);
    };

    if (loading) return <div className='loading'>Loading...</div>;

    return (
        <ProtectedRoute>
            <div className='courses-portal'>
                <div className='portal'>
                    <h1 className='welcome'> Welcome {user.username}</h1>
                    <h2 className='course-heading'> Your Courses</h2>

                    {user.enrolledCourses.map((course, index) => (
                        <div key={index} className='enrollment'>
                            <div className='enroll-img'>
                                <img src={course.course_image} alt="course_img" />
                            </div>
                            <div className='enroll-content'>
                                <div className='content'>
                                    <h3>{course.course_title}</h3>
                                    <p>{course.course_description}</p>
                                    <p>{course._id}</p>
                                </div>
                                <div className='start'>
                                    <button onClick={() => handleStartCourse(course._id)}>Start Course</button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div>
                        <Courses />
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}

export default Portal;
