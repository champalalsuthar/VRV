import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { login, logout } from "./redux/slices/authSlice";
import api from "./utils/api";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ServicesPage from "./components/ServicesPage";
import Footer from "./components/Footor";


const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Add loading state

  // Verify token on app load
  useEffect(() => {
    const verifyToken = async () => {
      const authToken = localStorage.getItem("token");
      const userId = localStorage.getItem("id");

      if (authToken && userId) {
        try {
          const response = await api.post("/api/verifytoken", { authToken });

          if (response.data.success) {
            dispatch(
              login({
                token: authToken,
                role: response.data.user.type,
                user: response.data.user,
                id: response.data.user._id,
              })
            );
          } else {
            throw new Error(response.data.error || "Invalid token");
          }
        } catch (error) {
          console.error("Token verification failed:", error.message);
          localStorage.removeItem("token");
          localStorage.removeItem("id");
          dispatch(logout());
          navigate("/login");
        }
      } else {
        dispatch(logout());
        navigate("/login");
      }
      setLoading(false); // Finish loading
    };

    verifyToken();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={< Signup />} />
        <Route path="/aboutus" element={< AboutUs />} />
        <Route path="/services" element={< ServicesPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
