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



// import React, { useEffect } from "react";

// const Footor = () => {
    
//     return (
//         <>
//             {/* <!-- Footer Section --> */}
//             <footer style="background: linear-gradient(45deg, #0f2027, #203a43, #2c5364); color: #fff; position: relative; overflow: hidden; padding: 40px 20px; text-align: center;">
//                 {/* <!-- Logo and Name --> */}
//                 <div style="margin-bottom: 20px;">
//                     <img src="logo.png" alt="Logo" style="width: 80px; height: auto;" />
//                     <h2 style="margin: 10px 0; font-size: 24px;">Your Website Name</h2>
//                 </div>

//                 {/* <!-- Navigation Links --> */}
//                 <nav style="margin-bottom: 20px;">
//                     <a href="#home" style="color: #fff; text-decoration: none; margin: 0 10px; font-size: 16px;">Home</a>
//                     <a href="#about" style="color: #fff; text-decoration: none; margin: 0 10px; font-size: 16px;">About Us</a>
//                     <a href
                    
//                     ="#services" style="color: #fff; text-decoration: none; margin: 0 10px; font-size: 16px;">Services</a>
//                     <a href="#login" style="color: #fff; text-decoration: none; margin: 0 10px; font-size: 16px;">Login</a>
//                     <a href="#signup" style="color: #fff; text-decoration: none; margin: 0 10px; font-size: 16px;">Signup</a>
//                 </nav>

//                 {/* <!-- Copyright Section --> */}
//                 <div style="font-size: 14px; margin-top: 20px;">
//                     <p>© <a href="https://vrvsecurity.in/" style="color: #fff; text-decoration: none;">vrvsecurity.in</a> - All rights reserved.</p>
//                     <p>Created by <strong>Champa Lal Suthar</strong> (Software Engineer)</p>
//                 </div>

//                 {/* <!-- 3D Animation --> */}
//                 <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1;">
//                     <div class="animation-layer" style="position: absolute; background: rgba(255, 255, 255, 0.1); border-radius: 50%; animation: move 20s linear infinite; box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);"></div>
//                     <div class="animation-layer" style="position: absolute; background: rgba(255, 255, 255, 0.2); border-radius: 50%; animation: move 25s linear infinite; box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);"></div>
//                     <div class="animation-layer" style="position: absolute; background: rgba(255, 255, 255, 0.3); border-radius: 50%; animation: move 30s linear infinite; box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);"></div>
//                 </div>
//             </footer>
//         </>
//     )
// };
// export default Footor;



