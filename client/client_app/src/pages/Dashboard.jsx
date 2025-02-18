import { useParams } from "react-router";
import { useEffect, useState} from "react";
import axios from "axios";
import ProtectedRoute from "../Utils/ProtectedRoutes";

const Dashboard = () => {
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const courseId = localStorage.getItem("courseId")
    


    useEffect(() => {
        const fetchCourse = async () => {
            try {
                
                const response = await axios.get(`http://localhost:5000/courses/${courseId}`);
                // console.log("data:", response.data);
                setCourse(response.data.course);
                setLoading(false);
            }
            catch (err) {
    setError('Failed to fetch course details.');
    setLoading(false);

}
        };
fetchCourse();
    }, [courseId]);




if (loading) {
    return <p>Loading...</p>;
}
if (error) {
    return <p>{error}</p>;
}

return (
    <ProtectedRoute>

        <div className="coursedetails">
            
            <h1>Dashboard</h1>
            <h2>{course.course_name}</h2>
            <p>{course.course_description}</p>

        </div>
    </ProtectedRoute>
);
};

export default Dashboard;

