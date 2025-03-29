import React from 'react';
import './HeaderComponent.css';

const HeaderComponent = ({ title = 'Untitled', onBack = () => {}, onSave = () => {} }) => {
  return (
    <div className="header-container">
      <div className="nav-link" onClick={onBack}>
        <span className="back-text">← Go Back</span>
      </div>
      <div className="title">
        <span>{title}</span>
      </div>
      <div className="save-button" onClick={onSave}>
        <img src="https://dashboard.codeparrot.ai/api/image/Z-Zl-wggqYBhYcD1/la-save.png" alt="Save" />
      </div>
    </div>
  );
};

export default HeaderComponent;
