import { useNavigate, useParams } from "react-router";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../components/Auth"; // Import AuthContext

const CourseDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState(null);
    const [isEnrolled, setIsEnrolled] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Access user context from AuthContext
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("token"); // Get token from localStorage
            if (!token) {
                setError('No authentication token found. Please log in.');
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
            } catch (err) {
                setError('Failed to fetch course details.');
                setLoading(false);
                console.error(err);
            }
        };
        fetchData();
    }, [id]);

    const handleEnroll = async () => {
        if (!user?._id) {
            navigate(`/login?redirect=/course/${id}`);
            return;
        }

        try {
            const token = localStorage.getItem("token"); // Get token from localStorage
            if (!token) {
                setError('No authentication token found. Please log in.');
                return;
            }

            const response = await axios.put(
                `http://localhost:5000/auth/update-enroll/${user._id}`,
                { courseId: id },
                { headers: { Authorization: `Bearer ${token}` } } 
            );

            if (response.status === 200) {
                setIsEnrolled(true); 
                navigate(`/portal`); 
            }
        } catch (error) {
            setError(error.response?.data?.message || error.message);
            console.error(error);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="coursedetails">
            <h2>{course.course_name}</h2>
            <p>{course.course_description}</p>
            <button onClick={handleEnroll}>
                {isEnrolled ? "Go to Dashboard" : "Enroll in Course"}
            </button>
        </div>
    );
};

export default CourseDetails;
