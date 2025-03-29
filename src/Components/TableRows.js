import React, { useState, useEffect } from 'react';
import './TableRows.css';
import WorkflowTimeline from './workflowTimeline';
import ExecuteWarningModal from './ExecuteWarningModal';
import { useNavigate } from 'react-router-dom';

const TableRows = ({loading,noData,workflowData, searchData}) => {

  const [showDeatils, setshowDetails]=useState(null);
  const [isOpen, setIsOpen] = useState(null);
  const [showModal, setShowModal]=useState(false);
  const [showDelete, setShowDelete]=useState(false);
  const [showDeleteModal,setShowDeleteModal]=useState(false);
  const navigate=useNavigate();
   const data=[
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
   ]
 
 
   const toggleDropdown = (index) => {
    if (setIsOpen === index) {
      console.log(setIsOpen);
      setIsOpen(null); // Hide if clicked again
    } else {
      setShowDelete((option)=>!option)
      setIsOpen(index); // Show the timeline for this row
    }
  };
  

  const showDeleteModalPopUp=()=>{
    setShowDeleteModal(true)
  }
  
   const callWorkflowTimeLine=(index)=>{
    if (showDeatils === index) {
      setshowDetails(null); // Hide if clicked again
    } else {
      setshowDetails(index); // Show the timeline for this row
    }
   }

   const executeModal=()=>{
    setShowModal(true)
   }
   const onClose=()=>{
    setShowModal(false);
    setShowDeleteModal(false);
   }

   if(loading)
    return "Loading!"

   console.log("search data", searchData)
  return (
    <div className="table-rows">
      {((noData==='') && searchData)? searchData.map((row, index) => (
        <div>
        <div key={index} className="table-row">
          <div className="row-content">
            <span className="workflow-name">{row.name}</span>
            <span className="workflow-id">{row.id}</span>
            <span className="workflow-author">{row.author}</span>
            <span className="workflow-desc">{row.description}</span>
          </div>
          <div className="row-actions">
            <img src="https://dashboard.codeparrot.ai/api/image/Z-Zi9x_Ow-G5661K/pin.png" alt="pin" className="pin-icon" />
            <button className="action-btn execute-btn" onClick={executeModal} >Execute</button>
            {showModal && <ExecuteWarningModal onClose={onClose}/>}
            <button onClick={()=>navigate('/create-process')} className="action-btn edit-btn">Edit</button>
            <div className="overflow-menu">
              <img onClick={()=>toggleDropdown(index)} src="https://dashboard.codeparrot.ai/api/image/Z-Zi9x_Ow-G5661K/frame-10.png" alt="menu" className="menu-icon" />
              {(isOpen === index) && showDelete && (
               <div className="dropdown-menu">
               <button onClick={showDeleteModalPopUp} >Delete</button>
               {showDeleteModal && <ExecuteWarningModal message='Are You Sure You Want To Delete The Process ' onClose={onClose}/>}
               </div>
              )}
            </div>
            <img onClick={()=>callWorkflowTimeLine(index)}
            src={showDeatils === index?"https://dashboard.codeparrot.ai/api/image/Z-bSDwz4-w8v6Rfc/frame.png":"https://dashboard.codeparrot.ai/api/image/Z-Zi9x_Ow-G5661K/frame.png"}
             alt="frame" />
           
          </div>
          
        </div>
        <div> {showDeatils === index && <div> <WorkflowTimeline data={data}/></div>}</div>
        </div>
      )):<div><p>{noData}</p></div>}
    </div>
  );
};

export default TableRows;

