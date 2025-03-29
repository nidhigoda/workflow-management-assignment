import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch = () => {} }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search By Workflow Name/ID"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="search-icon">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 13L9 9M10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667Z" 
            stroke="#CACACA" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;

