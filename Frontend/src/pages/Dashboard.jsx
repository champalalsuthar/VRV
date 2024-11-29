import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion"; // For animations
import api from "../utils/api";
import Loading from "../components/Loading";
import { getuserbyid } from "../API/getuserbyid";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRole = useSelector((state) => state.auth.userRole);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const _id = localStorage.getItem("id");

    if (!_id) {
      setError("User ID not found");
      setLoading(false);
      dispatch(logout());
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      try {
        const response = await getuserbyid(_id)
        setUserDetails(response.user);
      } catch (err) {
        console.error("Login failed", err);
        setError("Error in Data feching");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="w-full flex justify-center items-center h-screen"><Loading /></div>;
  }

  if (error) {
    return <div className="text-center text-red-500 text-lg">{error}</div>;
  }

  return (
    <div className="w-full  bg-gradient-to-br from-blue-900 via-purple-800 to-gray-900 p-8 pt-4 mt-16">
      <div className="max-w-4xl mx-auto">
        {/* Welcome Section */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome, {userDetails.first_name} {userDetails.last_name}
          </h2>
          <p className="text-gray-600 mt-2">
            Your role:{" "}
            <span className="text-blue-600 font-semibold">{userRole}</span>
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          className="flex flex-col md:flex-row bg-white rounded-lg shadow-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image */}
          <div className="md:w-1/4 bg-gray-200 flex items-center justify-center p-4">
            <img
              src={userDetails?.cover || "/userprofileimage.jpeg"}
              alt="Profile"
              className="rounded-full h-40 w-40  shadow-lg"
            />
          </div>
          {/* Profile Details */}
          <div className="p-4 md:w-3/4">
            <h3 className="text-xl font-bold text-gray-800">
              {userDetails.first_name} {userDetails.last_name}
            </h3>
            <p className="text-gray-600 mt-2">{userDetails.email}</p>
            <p className="text-gray-600 mt-2">
              {userDetails.country_code} {userDetails.mobile}
            </p>
            <p className="text-gray-600 mt-4">
              Account Status:{" "}
              <span
                className={`font-semibold ${userDetails.status === "active"
                  ? "text-green-500"
                  : "text-red-500"
                  }`}
              >
                {userDetails.status}
              </span>
            </p>
          </div>
        </motion.div>

        {/* Decorative Animation */}
        <motion.div
          className="w-full mt-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="rounded-lg shadow-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4">
            <h3 className="text-white text-lg text-center font-semibold">
              Explore Your Dashboard!
            </h3>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
