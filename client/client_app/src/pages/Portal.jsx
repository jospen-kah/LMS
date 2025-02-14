import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import axios from "axios";
import ProtectedRoute from '../Utils/ProtectedRoutes';
import Courses from '../components/courses';
import './Portal.css'

function Portal() {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/portal/${id}`, {
                    headers: { "Content-Type": "application/json" },
                });
                setUser(response.data.user);
                setLoading(false);
                console.log("data: ", response.data)
            } catch (error) {
                console.error("Error fetching portal data: ", error);
                setLoading(false);

            }
        };
        fetchUserData();
    }, [id])

    if (loading) return <div className='loading'>Loading...</div>
    return (
        <ProtectedRoute>
            <div className='courses-portal'>

                <div className='portal'>
                    <h1 className='welcome'> Welcome   {user.username}</h1>
                    <h2 className='course-heading'> Your Courses</h2>

                    {user.enrolledCourses.map((course, index) => (
                        <div key={index} className='enrollment' >
                            <div className='enroll-img'>
                                <img src={course.course_image} alt="course_img" />
                            </div>
                            <div className='enroll-content'>
                                <div className='content'>
                                    <h3>{course.course_title}</h3>
                                    <p>{course.course_description}</p>
                                </div>
                                <div className='start'>
                                  <button>Start Course</button>
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
    )
}

export default Portal
