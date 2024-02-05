// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'; // Assuming you have a logo image

const Header = () => {
  return (
    <header className="header">
        <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/resume" className="nav-link">Resume</Link>
        </nav>
    </header>
  );
};

export default Header;
