// HomePage.js
import React from 'react';
import '../styles/HomeStyles.css';

const Home = () => {
  const handleButtonClick = (page) => {
    // Handle button click
    console.log(`Navigating to ${page}`);
  };

  return (
    <div className="home-page-container">
      <h1 className="title">Welcome to My Awesome Website</h1>
      <button className="button" onClick={() => handleButtonClick('Projects')}>Projects</button>
      <button className="button" onClick={() => handleButtonClick('Resume')}>Resume</button>
      <button className="button" onClick={() => handleButtonClick('Contact')}>Contact</button>
    </div>
  );
};

export default Home;