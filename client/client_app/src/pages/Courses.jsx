import {useEffect, useState } from 'react';



const Courses= () =>{
  const [ coursesData, setCoursesData] = useState([{}])

    useEffect(() => {
    fetch("http://localhost:5000/courses/")
      .then(response => response.json())
      .then(
        data => {
          setCoursesData(data)
        }
      )
  }, [])


  return (
    <div className="courses-grid">
      {coursesData.map((data, index) => (
        <div key={index} className="course-card">
          <img
            src={data.course_image } 
            alt={`Course: ${data.course_name}`}
            className="course-image"
          />
          <div className="course-detail">
            <h2>{data.course_name}</h2>
            <p>{data.description}</p>
            <div className="enroll">
              <p>Enroll to Course</p>
            </div>
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default Courses;