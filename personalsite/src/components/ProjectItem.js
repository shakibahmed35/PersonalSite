// ProjectItem.js
import {React, useState} from 'react';
import Modal from './Modal';

const ProjectItem = ({title, description, imageUrl, moreInfo}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className='project-item' onClick={toggleModal}>
            <img src={imageUrl} alt={title} className='project-item-image'/>
            <h2 className='project-item-title'>{title}</h2>
            <p className='project-item-description'>{description}</p>
            {isOpen && <Modal onClose={toggleModal}>{moreInfo}</Modal> }
        </div>
    );
};

export default ProjectItem;