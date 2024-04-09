// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Your Logo</div>
        <ul className="navbar-links">
          <li><a href="#home" className="navbar-link">Home</a></li>
          <li><a href="#about" className="navbar-link">About</a></li>
          <li><a href="#services" className="navbar-link">Services</a></li>
          <li><a href="#contact" className="navbar-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
