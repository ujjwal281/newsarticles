import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../store/articleSlice';

const Pagination = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.articles.currentPage);

    const handlePageChange = (newPage) => {
        dispatch(setPage(newPage));
    };

    return (
        <div className=" flex justify-between lg:px-40 lg:my-11 mx-1 items-center">
            <button className=' hover:scale-x-105 cursor-pointer' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            <span >Page {currentPage}</span>
            <button className='hover:scale-x-105 cursor-pointer' onClick={() => handlePageChange(currentPage + 1) }>Next</button>
        </div>
    );
};

export default Pagination;
