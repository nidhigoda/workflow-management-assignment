import React from 'react';
import './CreateButton.css';
import { useNavigate } from 'react-router-dom';
const CreateButton = () => {
  const navigate=useNavigate();

  const createProcess=()=>{
    navigate('/create-process')
  }
  return (
    <button 
      className="create-button"
      onClick={createProcess}
    >
      + Create New Process
    </button>
  );
};



export default CreateButton;

