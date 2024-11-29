import React from "react";
import "./Footer.css"; // Import the external CSS file
import { Link } from "react-router-dom"; 
const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo and Name */}
      <div className="footer-logo-section">
        {/* <img src="/logo.jpeg" alt="Logo" className="footer-logo" /> */}
        <h2>VRV Security</h2>
      </div>

      {/* Navigation Links */}
      <nav className="footer-nav">
  <Link to="/">Home</Link>
  <Link to="/aboutus">About Us</Link>
  <Link to="/services">Services</Link>
  <Link to="/login">Login</Link>
  <Link to="/signup">Signup</Link>
</nav>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <p>
          © <a href="https://vrvsecurity.in/">vrvsecurity.in</a> - All rights
          reserved.
        </p>
        <p>
          Created by <strong>Champa Lal Suthar</strong> (Software Engineer)
        </p>
      </div>

      {/* 3D Animation */}
      <div className="footer-animation">
        <div className="animation-layer layer1"></div>
        <div className="animation-layer layer2"></div>
        <div className="animation-layer layer3"></div>
      </div>
    </footer>
  );
};

export default Footer;
