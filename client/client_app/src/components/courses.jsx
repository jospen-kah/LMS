
import axios from 'axios';
import { useEffect, useState } from 'react';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:5000/courses',
            responsetype: 'application/json'
        })
            .then(response => {
                setCourses(response.data);
                console.log("response: ", response.data)
            })
            .catch(error => {
                console.error('There was an error fetching the courses!', error);
            });
    }, []);

   

    return (
        <div className='content-3'>
            <h1>Our Courses</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt
                etiam eget elit id imperdiet et. Cras eu sit dignissim lorem
                nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
            </p>

            <div>

                {courses.map((course, index) => (
                    <div key={index} className="course-card">
                        <div className="course-details">
                            <div className='picture'>
                                <img src={course.course_image} alt="leadership" />
                            </div>
                            <p className='name'>{course.course_name}</p>
                            <p className='description'>{course.course_description}</p>
                            <button className='enroll'>Get it Now</button>
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