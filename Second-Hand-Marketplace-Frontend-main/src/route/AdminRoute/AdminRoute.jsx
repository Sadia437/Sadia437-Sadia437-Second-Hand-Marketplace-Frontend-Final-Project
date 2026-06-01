
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../../components/Loading/Loading";

const AdminRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);

  if (isAdminLoading) return <Loading />;

  if (user && isAdmin) return children;

  return <Navigate to="/sign-in" state={{ from: location }} replace />;
};

export default AdminRoute;
