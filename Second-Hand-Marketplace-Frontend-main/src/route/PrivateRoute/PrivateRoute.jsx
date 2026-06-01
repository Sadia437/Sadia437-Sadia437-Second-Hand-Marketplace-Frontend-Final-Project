import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const token = localStorage.getItem("accessToken");
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (user && token) return children;

  return <Navigate to="/sign-in" state={{ from: location }} replace />;
};

export default PrivateRoute;
