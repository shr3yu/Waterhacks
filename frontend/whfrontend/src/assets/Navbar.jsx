import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import logo from './logo.png'; // Import the logo image
import { IoPersonCircleOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className="navbar">

      <img src={logo} className="navbar-logo-img"/>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/search">Query</a></li>
        <li><a href="/contactUs">Contact Us</a></li>
        <li>
          <a href="/profile" className="navbar-icon-link">
            <IoPersonCircleOutline  size={30}/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;