import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const ProtectedRouteAuth = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userRole = useSelector((state) => state.auth.userRole); 

  const userRoleLower = userRole ? userRole.toLowerCase() : "";
  if (isAuthenticated && userRole) {
    toast.error("You are already logged in. Redirecting to dashboard...");
    return <Navigate to={`/dashboard/${userRoleLower}`} />; 
  }

  return (
    <>
      {children} 
    </>
  );
};

export default ProtectedRouteAuth;
