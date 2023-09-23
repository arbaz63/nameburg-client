import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAdmin, isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/Sign-in" />;
  }
  if (!isAdmin) {
    return <Navigate to="/Sign-up" />;
  } else {
    return <Outlet />;
  }
};

export default ProtectedRoute;
