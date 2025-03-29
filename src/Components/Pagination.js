import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage = 2, totalPages = 15 }) => {
  const renderPageNumbers = () => {
    if (totalPages <= 1) return null;

    const items = [];
    
    // Previous button
    items.push(
      <button key="prev" className="pagination-arrow" disabled={currentPage === 1}>
        <img src="https://dashboard.codeparrot.ai/api/image/Z-Zi9x_Ow-G5661K/frame-10-9.png" alt="Previous" className="arrow-icon" />
      </button>
    );

    // First page
    items.push(
      <button 
        key={1} 
        className={`pagination-number ${currentPage === 1 ? 'active' : ''}`}
      >
        1
      </button>
    );

    // Second page
    items.push(
      <button 
        key={2} 
        className={`pagination-number ${currentPage === 2 ? 'active' : ''}`}
      >
        2
      </button>
    );

    // Third page
    items.push(
      <button 
        key={3} 
        className={`pagination-number ${currentPage === 3 ? 'active' : ''}`}
      >
        3
      </button>
    );

    // Dots
    items.push(
      <span key="dots" className="pagination-dots">...</span>
    );

    // Last page
    items.push(
      <button 
        key={totalPages} 
        className={`pagination-number ${currentPage === totalPages ? 'active' : ''}`}
      >
        {totalPages}
      </button>
    );

    // Next button
    items.push(
      <button key="next" className="pagination-arrow" disabled={currentPage === totalPages}>
        <img src="https://dashboard.codeparrot.ai/api/image/Z-Zi9x_Ow-G5661K/frame-10-10.png" alt="Next" className="arrow-icon" />
      </button>
    );

    return items;
  };

  return (
    <div className="pagination">
      {renderPageNumbers()}
    </div>
  );
};

export default Pagination;

