// HomePage.js
import React from 'react';
import '../styles/HomeStyles.css';

const Resume = () => {
  const handleButtonClick = (page) => {
    // Handle button click
    console.log(`Navigating to ${page}`);
  };

  return (
    <div className="home-page-container">
      <h1 className="title">Welcome to My Shakib Ahmed's Site Resume Page</h1>
    </div>
  );
};

export default Resume;