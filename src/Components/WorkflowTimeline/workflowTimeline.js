import React from 'react';
import './WorkflowTimeline.css'
import { useNavigate } from 'react-router-dom';


const WorkflowTimeline = ({ data = [] }) => {
  const timelineData = data.length ? data : [
    {
      timestamp: "28/05 - 22:43 IST",
      status: "Passed",
      icon: "https://dashboard.codeparrot.ai/api/image/Z-bSDwz4-w8v6Rfc/group-13.png",
      actionIcon: "https://dashboard.codeparrot.ai/api/image/Z-bSDwz4-w8v6Rfc/frame-2.png"
    },
    {
      timestamp: "28/05 - 22:43 IST", 
      status: "Failed",
      icon: "https://dashboard.codeparrot.ai/api/image/Z-bSDwz4-w8v6Rfc/group-13-2.png",
      actionIcon: "https://dashboard.codeparrot.ai/api/image/Z-bSDwz4-w8v6Rfc/frame-3.png"
    },
    {
      timestamp: "28/05 - 22:43 IST",
      status: "Failed", 
      icon: "https://dashboard.codeparrot.ai/api/image/Z-bSDwz4-w8v6Rfc/group-13-3.png",
      actionIcon: "https://dashboard.codeparrot.ai/api/image/Z-bSDwz4-w8v6Rfc/frame-4.png"
    },
    {
      timestamp: "28/05 - 22:43 IST",
      status: "Passed",
      icon: "https://dashboard.codeparrot.ai/api/image/Z-bSDwz4-w8v6Rfc/group-13-4.png", 
      actionIcon: "https://dashboard.codeparrot.ai/api/image/Z-bSDwz4-w8v6Rfc/frame-5.png"
    }
  ];
  const navigate=useNavigate();
  return (
    <div className="workflow-timeline">
      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            <img src={item.icon} alt="status" className="status-icon" />
            <span className="timestamp">{item.timestamp}</span>
            <div className={`status-tag ${item.status.toLowerCase()}`}>
              {item.status}
            </div>
            <img src={item.actionIcon} onClick={()=>navigate('/create-process')} alt="action" className="action-icon" />
            {index < timelineData.length - 1 && <div className="timeline-line" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkflowTimeline;

