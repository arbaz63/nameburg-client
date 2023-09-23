// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const accessToken = localStorage.getItem("accessToken");
  const role = localStorage.getItem("role");

  const [isLoggedIn, setIsLoggedIn] = useState(accessToken ? true : false);
  const [isAdmin, setIsAdmin] = useState(role === "admin" ? true : false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("cart");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    // Update isAdmin based on the user's role when the component mounts
    setIsAdmin(role === "admin" ? true : false);
  }, [role]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
