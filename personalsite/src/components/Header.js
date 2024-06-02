// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'; 
import personallogo from '../assets/personallogo.jpeg'

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={personallogo} alt="Logo" className="logo" />
        </Link>
      </div>
      <nav className="nav">
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/resume" className="nav-link">Resume</Link>
      </nav>
    </header>
  );
};

export default Header;
