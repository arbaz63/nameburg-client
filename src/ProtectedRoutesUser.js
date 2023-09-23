import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRouteUser = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/Sign-in" />;
  } else {
    return <Outlet />;
  }
};

export default ProtectedRouteUser;
