import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


const isUserAuthenticated = () => {
    const token = localStorage.getItem("token");

    if (!token) return false;

    try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000; // Convert to seconds

        if (decoded.exp && decoded.exp < currentTime) {
            localStorage.removeItem("token"); // Token expired, remove it
            return false;
        }
        return true;
    } catch (error) {
        console.error("Invalid token: ", error);
        return false;
    }
};

const ProtectedRoute = () => {
    return isUserAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
