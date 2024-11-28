import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { GoHome, GoPeople } from "react-icons/go";
import { IoLogInOutline } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu toggle state
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    setMenuOpen(false); // Close the menu after logout
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-300 shadow-md z-50 ">
      <div className=" flex items-center justify-between mx-auto px-6 py-4 bg-gray-300">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600 md:hidden text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <Link
            to="/"
            className="text-3xl font-bold text-gray-800"
            style={{
              background: "linear-gradient(to left, #3b82f6, #1e40af)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            vrv
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-lg font-medium text-gray-600 hover:text-gray-800">
            <span className="flex items-center gap-2">
              <GoHome className="text-xl" />
              Home
            </span>
          </Link>
          <Link to="/about-us" className="text-lg font-medium text-gray-600 hover:text-gray-800">
            <span className="flex items-center gap-2">
              <GoPeople className="text-xl" />
              About Us
            </span>
          </Link>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="text-lg font-medium text-gray-600 hover:text-gray-800">
                <span className="flex items-center gap-2">
                  <MdAccountCircle className="text-xl" />
                  Profile
                </span>
              </Link>
              <button
                onClick={handleLogout}
                className="text-lg font-medium text-gray-600 hover:text-gray-800"
              >
                <span className="flex items-center gap-2">
                  <IoLogInOutline className="text-xl" />
                  Logout
                </span>
              </button>
            </>
          ) : (
            <>
              <Link to="/signup" className="text-lg font-medium text-gray-600 hover:text-gray-800">
                <span className="flex items-center gap-2">
                  <IoLogInOutline className="text-xl" />
                  Sign-Up
                </span>
              </Link>
              <Link to="/login" className="text-lg font-medium text-gray-600 hover:text-gray-800">
                <span className="flex items-center gap-2">
                  <IoLogInOutline className="text-xl" />
                  Login
                </span>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-2/3 bg-gray-100 shadow-lg z-40 transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <ul className="p-6 space-y-4">
            <li>
              <Link
                to="/"
                className="text-gray-700 font-medium hover:text-gray-900"
                onClick={() => setMenuOpen(false)}
              >
                <GoHome className="inline mr-2 text-xl" />
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="text-gray-700 font-medium hover:text-gray-900"
                onClick={() => setMenuOpen(false)}
              >
                <GoPeople className="inline mr-2 text-xl" />
                About Us
              </Link>
            </li>
            {isAuthenticated ? (
              <>
                <li>
                  <Link
                    to="/dashboard"
                    className="text-gray-700 font-medium hover:text-gray-900"
                    onClick={() => setMenuOpen(false)}
                  >
                    <MdAccountCircle className="inline mr-2 text-xl" />
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-gray-700 font-medium hover:text-gray-900"
                  >
                    <IoLogInOutline className="inline mr-2 text-xl" />
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/signup"
                    className="text-gray-700 font-medium hover:text-gray-900"
                    onClick={() => setMenuOpen(false)}
                  >
                    <IoLogInOutline className="inline mr-2 text-xl" />
                    Sign-Up
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="text-gray-700 font-medium hover:text-gray-900"
                    onClick={() => setMenuOpen(false)}
                  >
                    <IoLogInOutline className="inline mr-2 text-xl" />
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



