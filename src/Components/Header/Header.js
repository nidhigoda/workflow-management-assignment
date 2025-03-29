import React from 'react';
import './Header.css';

const Header = ({ title = 'Workflow Builder' }) => {
  return (
    <div className="header">
      <button className="menu-button">
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z-Zi9x_Ow-G5661K/ci-hambu.png" 
          alt="Menu"
          className="menu-icon"
        />
      </button>
      <h1 className="title">{title}</h1>
    </div>
  );
};

export default Header;

