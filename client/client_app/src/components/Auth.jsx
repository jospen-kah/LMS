import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";  
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decodedUser = jwtDecode(token);
                setUser(decodedUser);
            } catch (error) {
                console.error("Invalid token:", error);
                localStorage.removeItem("token");
                setUser(null);
            }
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axios.post(
                'http://localhost:5000/auth/login',
                { email, password },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );

            //  Extract token correctly
            const { token } = response.data;

            if (!token) throw new Error("Login failed: No token received");

            localStorage.setItem("token", token);
            const decodedUser = jwtDecode(token);
            setUser(decodedUser);

            // Redirect based on enrolled courses
            if (decodedUser.enrolledCourses?.length > 0) {
                navigate("/portal");
            } else {
                navigate("/all-courses");
            }
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
