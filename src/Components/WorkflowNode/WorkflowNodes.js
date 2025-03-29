import React from 'react';
import './WorkflowNodes.css';

const WorkflowNodes = () => {
  return (
    <div className="workflow-nodes">
      <div className="start-node">
        <div className="start-circle">
          <span className="start-text">Start</span>
        </div>
      </div>
      
      <div className="connector">
        <div className="vertical-line"></div>
        <div className="add-button">
          <div className="add-circle">
            <div className="plus-icon"></div>
          </div>
        </div>
      </div>
      
      <div className="end-node">
        <div className="end-circle-outer">
          <div className="end-circle-inner">
            <span className="end-text">End</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowNodes;
