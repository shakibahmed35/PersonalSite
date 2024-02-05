// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeaderStyles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" className="logo" />
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/resume" className="nav-link">Resume</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
