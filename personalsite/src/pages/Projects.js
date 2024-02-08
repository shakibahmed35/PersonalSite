// HomePage.js
import React from 'react';
import Header from '../components/Header';
import ProjectItem from '../components/ProjectItem';
import '../styles/HomeStyles.css';
import '../styles/HeaderStyles.css';
import '../styles/ProjectStyles.css';
import logo from '../assets/logo.svg'; 

const Projects = () => {

  return (
    <div>
        <div className="header">
            <Header />
        </div>
        <div className="project-page">
            <h1 className="project-page-title">Projects</h1>
            <div className='project-list'>
                <ProjectItem
                    title="Personal Website"
                    description='A personal website built using React.'
                    imageUrl={logo}
                    moreInfo="I will add this later haha"
                />
            </div>
        </div>
    </div>
  );
};

export default Projects;