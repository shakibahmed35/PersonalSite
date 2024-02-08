// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/HomeStyles.css';
import '../styles/HeaderStyles.css';
import Header from '../components/Header';

const Home = () => {

  return (
    <div>
        <div className="header"> 
            <Header/>
        </div>
        <div className="home-container">
        <h1 className="title">Welcome to My Shakib Ahmed's Site Home Page</h1>
        <div className='button-container'>
            <Link to="/projects">
                <button className='button-home'>Projects</button>
            </Link>
            <Link to="/resume">
                <button className='button-home'>Resume</button>
            </Link>
        </div>
        </div>
    </div>
  );
};

export default Home;