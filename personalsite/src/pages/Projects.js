// Projects.js
import React, { useState } from 'react';
import ProjectItem from '../components/ProjectItem';
import Modal from '../components/Modal';
import Header from '../components/Header';
import '../styles/ProjectItemStyles.css';
import '..//styles/ProjectStyles.css';
import logo from '../assets/logo.svg'; 

const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className='projects-page-container'>
            <div className="header"> 
                <Header/>
            </div>
            <div className="projects-page">
                <div className='projects-container'>
                    <ProjectItem 
                        title="This Website" 
                        description="This is my personal website to act as a portfolio" 
                        imageUrl={logo} moreInfo="More info 1" 
                        toggleModal={toggleModal} />
                    <ProjectItem 
                        title="This Website" 
                        description="Description 1" 
                        imageUrl={logo} moreInfo="More info 1" 
                        toggleModal={toggleModal} />
                    <ProjectItem 
                        title="This Website" 
                        description="Description 1" 
                        imageUrl={logo} moreInfo="More info 1" 
                        toggleModal={toggleModal} />
                    <ProjectItem 
                        title="This Website" 
                        description="Description 1" 
                        imageUrl={logo} moreInfo="More info 1" 
                        toggleModal={toggleModal} />

                    {/* Render the modal */}
                    <Modal onClose={toggleModal} isActive={isModalOpen}>
                        {/* Modal content */}
                        <h2>Modal Content</h2>
                        <p>This is the content of the modal.</p>
                    </Modal>
                    </div>
            </div>
        </div>
    );
};

export default Projects;
