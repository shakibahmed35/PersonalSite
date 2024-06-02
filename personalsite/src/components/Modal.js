// Modal.js
import React from 'react';
import "../styles/ModalStyles.css";
import useEscapeKey from './UseEscapeKey';

const Modal = ({ onClose, children, isActive }) => {
    useEscapeKey(onClose)

    if (!isActive) return null;
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
