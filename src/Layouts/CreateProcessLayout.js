import React from 'react';
import HeaderComponent from '../Components/HeaderComponent';
import ControlButtons from '../Components/ControlButtons';
import WorkflowNodes from '../Components/WorkflowNodes';
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

