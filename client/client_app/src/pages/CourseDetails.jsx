import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
const CourseDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState(null);
    const [isEnrolled, setIsEnrolled] = useState(false);
    const isLogged = !!localStorage.getItem("token");

    useEffect(() => {
        // Fetch course details
        const fetchData = async () => {
            const token = localStorage.getItem("token");

            try {
                const response = await axios.get(`http://localhost:5000/courses/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setCourse(response.data.course);
                setIsEnrolled(response.data.isEnrolled);

            } catch (error) {
                console.error(error);
            }
        };
        if (isLogged) fetchData();
    }, [id, isLogged]);
    const handleEnroll = async () => {
        if (!isLogged) {
            navigate(`/login?redirect=/course/${id}`);
            return;
        }
        if (isEnrolled) {
            navigate(`/portal`);
            return;
        }
        const token = localStorage.getItem("token");

        try {
            const response = await axios.put(
                'http://localhost:5000/api/courses/users/update/:id',
                { isEnrolled: true, courseId: id },
                { headers: { Authorization: `Bearer ${token}` } },
            );

            if (response.status === 200) {
                setIsEnrolled(true);
                navigate(`/portal`);
            }
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message || error.message);
        }

    }

    return (
        <div>
        <h2>{course.name}</h2>
        <p>{course.description}</p>
        <button onClick={handleEnroll}>{isEnrolled ? "Go to Dashboard" : "Enroll in Course"}</button>
      </div>
    );

}

export default CourseDetails;