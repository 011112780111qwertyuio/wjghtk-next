// components/Pagination.js
import React from 'react';
import Link from 'next/link';
import './style.scss';
const Pagination = ({ currentPage, totalPages,addpage}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className='pagination'>
      {pages.map(page => (
        <Link key={page} href={`?page=${addpage===undefined?page:page+"&"+addpage}`} passHref>
          <button
            className={currentPage === page ? "active" : ""}
            style={{ margin: '0 5px', fontWeight: currentPage === page ? 'bold' : 'normal' }}
          >
            {page}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
