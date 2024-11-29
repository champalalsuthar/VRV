import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { login, logout } from "./redux/slices/authSlice";
import api from "./utils/api";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ServicesPage from "./pages/ServicesPage";
import Footer from "./components/Footor";
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "./components/Loading";


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
    return <div className="w-full flex justify-center items-center h-screen"><Loading /></div>;
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Flip}
      />
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
