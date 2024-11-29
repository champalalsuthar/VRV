import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProtectedRoute = ({ children, requiredRole }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userRole = useSelector((state) => state.auth.userRole); // Get user role from state

  // Convert userRole to lowercase for comparison
  const userRoleLower = userRole ? userRole.toLowerCase() : "";

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Check if the user's role matches the required role for this route
  if (userRoleLower !== requiredRole) {
    // Show a toast notification
    toast.error("You are not authorized to access this page!");

    // Redirect to the homepage
    return <Navigate to="/" />;
  }

  return (
    <>
      {children}
      <ToastContainer /> {/* Make sure to render ToastContainer to show toast messages */}
    </>
  );
};

export default ProtectedRoute;

// import React from "react";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

// export default ProtectedRoute;
