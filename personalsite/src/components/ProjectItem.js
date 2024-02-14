// ProjectItem.js
import React from 'react';
import '../styles/ProjectItemStyles.css';

const ProjectItem = ({ title, description, imageUrl, moreInfo, toggleModal }) => {
    return (
        <div className='project-item' onClick={toggleModal}>
            <div className='project-item-image-container'>
                <img src={imageUrl} alt={title} className='project-item-image' />
            </div>
            <h2 className='project-item-title'>{title}</h2>
            <p className='project-item-description'>{description}</p>
        </div>
    );
};

export default ProjectItem;
