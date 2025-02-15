
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
        const storedUser = localStorage.getItem("user");

        if (token && storedUser) {
            try {
                // Parse user data from localStorage
                const decodedUser = JSON.parse(storedUser);
                setUser(decodedUser);
            } catch (error) {
                console.error("Invalid user data in localStorage:", error);
                localStorage.removeItem("token");
                localStorage.removeItem("user");
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

            // Extract token and user from the response
            const { token, user: userData } = response.data;
            
            // if (!token || !userData) throw new Error("Login failed: No token or user data received");

            // Store token and user in localStorage
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(userData));

            
            const decodedUser = jwtDecode(token); 
            setUser(userData); 

            // Redirect based on enrolled courses
            if (userData.enrolledCourses?.length > 0) {
                navigate(`/portal/${userData.id}`);
            } else {
                navigate("/courses");
            }
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
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
