import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import logo from './logo.png'; // Import the logo image
const Navbar = () => {
  return (
    <div className="navbar">

      <img src={logo} className="navbar-logo-img"/>
      <ul className="navbar-links">
        <li><a href="/home">Home</a></li>
        <li><a href="/contactUs">Contact Us</a></li>
        <li><a href="/">Query</a></li>
        <li><a href="/signup">Sign Up</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </div>
  );
};

export default Navbar;