import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
const CourseDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState(null);
    const [isEnrolled, setIsEnrolled] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        const fetchData = async () => {
            const token = localStorage.getItem("token");
            try {
                const response = await axios.get(`http://localhost:5000/courses/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                // console.log(response.data.course)
                setCourse(response.data.course);
                setIsEnrolled(response.data.isEnrolled);
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
        const token = localStorage.getItem("token");
        const storedUser = JSON.parse(localStorage.getItem("data.user"));
        console.log("Stored user:", storedUser);
        
        if (!storedUser || !storedUser._id) {
            console.error("User ID missing in localStorage!");
            setError("User ID not found. Please log in again.");
            return;
        }
        
        const userId = storedUser?.user?._id; 
        console.log("Enrolling User ID:", userId);
        if (!userId) {
            navigate(`/login?redirect=/course/${id}`);
            return;
        }
        if (isEnrolled) {
            navigate(`/portal`);
            return;
        }

        try {
            const response = await axios.put(
                `http://localhost:5000/auth/update-enroll/${userId}`,
                { isEnrolled: true, courseId: id },
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