import React from 'react';
import './TableHeader.css';

const TableHeader = () => {
  return (
    <div className="table-header">
      <div className="header-items">
        <span className="header-item workflow-name">Workflow Name</span>
        <span className="header-item id">ID</span>
        <span className="header-item last-edited">Last Edited On</span>
        <span className="header-item description">Description</span>
      </div>
      <div className="header-divider"></div>
    </div>
  );
};

export default TableHeader;

