import React from 'react';
import HeaderComponent from '../Components/HeaderComponent/HeaderComponent';
import ControlButtons from '../Components/ControlButton/ControlButtons';
import WorkflowNodes from '../Components/WorkflowNode/WorkflowNodes';
import './CreateProcessLayout.css';
import { useNavigate } from 'react-router-dom';
const CreateProcesslayout = () => {
  const navigate=useNavigate();
  const clickBack=()=>{
    navigate('/workflow')
  }
  return (
    <div className="layout-container">
      <HeaderComponent title="Untitled" onBack={clickBack} onSave={() => {}} />
      <div className="workflow-container">
        <WorkflowNodes />
      </div>
      <ControlButtons />
    </div>
  );
};

export default CreateProcesslayout;

