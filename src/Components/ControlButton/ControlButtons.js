import React from 'react';
import './ControlButtons.css';

const ControlButtons = () => {
  return (
    <div className="control-buttons-container">
      <div className="undo-redo-group">
        <button className="icon-button">
          <img src="https://dashboard.codeparrot.ai/api/image/Z-Zl-wggqYBhYcD1/frame-10-2.png" alt="Undo" className="icon" />
        </button>
        <button className="icon-button">
          <img src="https://dashboard.codeparrot.ai/api/image/Z-Zl-wggqYBhYcD1/frame-10-3.png" alt="Redo" className="icon" />
        </button>
      </div>
      
      <div className="zoom-group">
        <button className="icon-button">
          <img src="https://dashboard.codeparrot.ai/api/image/Z-Zl-wggqYBhYcD1/icon-but.png" alt="Reset" className="icon" />
        </button>
        <button className="icon-button">
          <img src="https://dashboard.codeparrot.ai/api/image/Z-Zl-wggqYBhYcD1/frame-10-4.png" alt="Zoom Out" className="icon" />
        </button>
        <div className="zoom-text">
          <img src="https://dashboard.codeparrot.ai/api/image/Z-Zl-wggqYBhYcD1/group-13-4.png" alt="Zoom Level" className="zoom-level" />
        </div>
        <button className="icon-button">
          <img src="https://dashboard.codeparrot.ai/api/image/Z-Zl-wggqYBhYcD1/frame-10-5.png" alt="Zoom In" className="icon" />
        </button>
      </div>
    </div>
  );
};

ControlButtons.defaultProps = {
  // Add any default props if needed
};

export default ControlButtons;

