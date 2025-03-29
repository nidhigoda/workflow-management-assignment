import React, {useState, useEffect} from 'react';
import Header from '../Components/Header';
import SearchBar from '../Components/SearchBar';
import CreateButton from '../Components/CreateButton';
import TableHeader from '../Components/TableHeader';
import TableRows from '../Components/TableRows';
import Pagination from '../Components/Pagination';
import './WorkflowLayout.css';

const WorkflowLayout = () => {
  const [workflowData, setWorkflowData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [noData, setNoData]=useState('');
  const [searchDataValue, setSearchData]=useState([])
   const fetchWorkflowData = async () => {
      try {
        const response = await fetch('https://project1.free.beeceptor.com/getAllWorkflowDetails');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log("Respomnse", response)
        
        // Try parsing the response as JSON
        const data = await response.json();
 
       setWorkflowData(data.data);
      } catch (err) {
        setError('Failed to fetch data');
        console.error(err);
      } finally {
        setLoading(false); // Set loading to false once the request is done
      }
    };

    useEffect(() => {
      // Call the fetch function
      fetchWorkflowData();
    }, []);

    const onSearch=(value)=>{
      const data=workflowData;
       if(value.length===0){
        setNoData("")
        setSearchData(data)
      }
      if(value.length>0){
        const searchData=data?.find(workflow=>workflow.id===value)
        console.log(searchData);
      if(searchData){
        setNoData("")
        setSearchData([searchData])
      }
      else{
        setNoData("No Data Found With Given ID") 
       
      }
      }
      
    }
    console.log("searchDataValue",searchDataValue)
  return (
    <div className="workflow-layout">
      <Header />
      <div className="search-create-container">
        <SearchBar onSearch={onSearch} />
        <CreateButton />
      </div>
      <div className="table-container">
        <TableHeader />
        <TableRows noData={noData} loading={loading} searchData={searchDataValue.length>0?searchDataValue:workflowData} workflowData={workflowData}/>
      </div>
      <Pagination />
    </div>
  );
};

export default WorkflowLayout;

