// HomePage.js
import React from 'react';
import Header from '../components/Header';
import '../styles/HomeStyles.css';
import '../styles/HeaderStyles.css';


const Resume = () => {
  const handleButtonClick = (page) => {
    // Handle button click
    console.log(`Navigating to ${page}`);
  };

  return (
    <div>
        <div className='header'>
            <Header />
        </div>
        <div className="home-page-container">
            <h1 className="title">Welcome to My Shakib Ahmed's Site Resume Page</h1>
        </div>
    </div>
  );
};

export default Resume;