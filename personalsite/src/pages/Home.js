// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/HomeStyles.css';

const Home = () => {

  return (
    <div className="home-container">
      <h1 className="title">Welcome to My Shakib Ahmed's Site Home Page</h1>
      <div className='button-container'>
        <Link to="/projects">
            <button>Projects</button>
        </Link>
        <Link to="/resume">
            <button>Resume</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;