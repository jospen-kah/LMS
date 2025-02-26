
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Courses = () => {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:5000/courses',
            responsetype: 'application/json'
        })
            .then(response => {
                setCourses(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the courses!', error);
            });
    }, []);

    const handleCourseClick = (courseId) => {
        navigate(`/courses/${courseId}`);
    };

    return (
        <div className='content-3'>
            <h1>Our Courses</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>

            <div className='course-box'>

                {courses.map((course, index) => (
                    <div key={index} className="course-card">
                        <div className="course-details">
                            <div className='picture'>
                                <img src={course.course_image} alt="leadership" />
                            </div>
                            <p className='name'>{course.course_name}</p>
                            <p className='description'>{course.course_description}</p>
                            <button
                                onClick={() => handleCourseClick(course._id)}
                                className='enroll'><p>Get it Now</p></button>
                        </div>

                    </div>
                ))}
            </div>
            <ul>

            </ul>
        </div>
    );
}





export default Courses;