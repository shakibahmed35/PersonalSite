// Modal.js
import React from 'react';
import "../styles/ModalStyles.css";

const Modal = ({ onClose, children, isActive }) => {
    return (
        <div className={`modal-overlay ${isActive ? 'active' : ''}`} onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
