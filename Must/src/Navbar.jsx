import React from "react";
import "./Navbar.css";
import logo from "./Assets/logo2.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-wrapper">
        <img src={logo} alt="" className="logo" />
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <button className="nav-connect">Connect With Me</button>
    </div>
  );
};

export default Navbar;
