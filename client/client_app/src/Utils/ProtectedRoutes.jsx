import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../components/Auth";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>;

  return user ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
