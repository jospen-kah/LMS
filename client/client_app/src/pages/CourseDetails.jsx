import { useNavigate, useParams } from "react-router";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../components/Auth"; // Import AuthContext
import Courses from "../components/courses";

const CourseDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState(null);
    const [isEnrolled, setIsEnrolled] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("token"); // Get token from localStorage
            if (!token) {
                setError(` ${navigate('/register')}`);
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(`http://localhost:5000/courses/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`, // Send token in Authorization header
                    },
                });
                setCourse(response.data.course);
                setLoading(false);

                localStorage.setItem("courseId",id)
            } catch (err) {
                setError('Failed to fetch course details.');
                setLoading(false);

            }
        };
        fetchData();
    }, [id]);

    const handleEnroll = async () => {
        const userData = JSON.parse(localStorage.getItem("user"));
        if (!userData.id) {

            navigate(`/login?redirect=/course/${id}`);
            return;
        }
        

        try {
            const token = localStorage.getItem("token");
            if (!token) {
                setError('No authentication.');
                return;
            }

            // Ensure user._id is correctly passed to the backend
            console.log("User ID:", userData.id);

            if (userData.enrolledCourses && userData.enrolledCourses.includes(id)) {
                setError("You are already enrolled in this course.");
                navigate(`/dashboard/${id}`);
                return;
            }

            const response = await axios.put(
                `http://localhost:5000/auth/update-enroll/${userData.id}`,
                { courseId: id },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            
            if (response.status === 200) {
                setIsEnrolled(true);
                navigate(`/portal/${userData.id}`);
            }
        } catch (error) {
            setError(error.response?.data?.message || error.message);
            console.error("Enrollment error:", error);
        }
    };


    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>

            <div className="coursedetails">
                <h2>{course.course_name}</h2>
                <p>{course.course_description}</p>
                <button onClick={handleEnroll}>
                    {isEnrolled ? "Go to Dashboard" : "Enroll in Course"}
                </button>
            </div>
            <div>
                <Courses/>
            </div>
        </div>
    );
};

export default CourseDetails;

