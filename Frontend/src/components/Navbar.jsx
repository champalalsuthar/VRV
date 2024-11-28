import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdAccountCircle, MdMiscellaneousServices } from "react-icons/md";
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
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 h-16">
      <div className="flex items-center justify-between mx-auto px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black md:hidden text-2xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <Link
            to="/"
            className="text-3xl font-bold text-black"
            style={{
              WebkitBackgroundClip: "text",
            }}
          >
            VRV
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-lg font-medium text-black hover:text-gray-200 transition duration-300"
          >
            <span className="flex items-center gap-2">
              <GoHome className="text-xl" />
              Home
            </span>
          </Link>
          <Link
            to="/aboutus"
            className="text-lg font-medium text-black hover:text-gray-200 transition duration-300"
          >
            <span className="flex items-center gap-2">
              <GoPeople className="text-xl" />
              About Us
            </span>
          </Link>
          <Link
            to="/services"
            className="text-lg font-medium text-black hover:text-gray-200 transition duration-300"
          >
            <span className="flex items-center gap-2">
              <MdMiscellaneousServices className="text-xl" />
              Services
            </span>
          </Link>
          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                className="text-lg font-medium text-black hover:text-gray-200 transition duration-300"
              >
                <span className="flex items-center gap-2">
                  <MdAccountCircle className="text-xl" />
                  Profile
                </span>
              </Link>
              <button
                onClick={handleLogout}
                className="text-lg font-medium text-black hover:text-gray-200 transition duration-300"
              >
                <span className="flex items-center gap-2">
                  <IoLogInOutline className="text-xl" />
                  Logout
                </span>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signup"
                className="text-lg font-medium text-black hover:text-gray-200 transition duration-300"
              >
                <span className="flex items-center gap-2">
                  <IoLogInOutline className="text-xl" />
                  Sign-Up
                </span>
              </Link>
              <Link
                to="/login"
                className="text-lg font-medium text-black hover:text-gray-200 transition duration-300"
              >
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
          className={`fixed top-0 left-0 h-full w-2/3 bg-gradient-to-r from-blue-500 to-indigo-600 text-black shadow-lg z-40 transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <ul className="p-6 space-y-4">
            <li>
              <Link
                to="/"
                className="text-black font-medium hover:text-gray-200 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                <GoHome className="inline mr-2 text-xl" />
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className="text-black font-medium hover:text-gray-200 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                <GoPeople className="inline mr-2 text-xl" />
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-black font-medium hover:text-gray-200 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                <MdMiscellaneousServices className="inline mr-2 text-xl" />
                Services
              </Link>
            </li>
            {isAuthenticated ? (
              <>
                <li>
                  <Link
                    to="/dashboard"
                    className="text-black font-medium hover:text-gray-200 transition duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    <MdAccountCircle className="inline mr-2 text-xl" />
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-black font-medium hover:text-gray-200 transition duration-300"
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
                    className="text-black font-medium hover:text-gray-200 transition duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    <IoLogInOutline className="inline mr-2 text-xl" />
                    Sign-Up
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="text-black font-medium hover:text-gray-200 transition duration-300"
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
