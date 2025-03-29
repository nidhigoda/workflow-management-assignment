import React from 'react';
import './ExecuteWarningModal.css';

const ExecuteWarningModal = ({ message='Are You Sure You Want To Execute The Process', processName = 'Process_Name', onClose = () => {}, onConfirm = () => {} }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <div className="header-left"></div>
          <button className="close-button" onClick={onClose}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z-blhgz4-w8v6RgD/frame-10.png" alt="close" className="close-icon" />
          </button>
        </div>
        
        <div className="modal-content">
          <h2 className="modal-title">
            "{message} '{processName}'?"
          </h2>
          <p className="modal-warning">
            You Cannot Undo This Step
          </p>
        </div>

        <div className="modal-footer">
          <div className="button-group">
            <button 
              className="btn btn-secondary" 
              onClick={onConfirm}
            >
              Yes
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={onClose}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecuteWarningModal;

