import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from '../store/articleSlice';

const categories = ['general', 'business', 'technology', 'entertainment' ,'sport' ,'music'];

const CategoryFilter = () => {
    const dispatch = useDispatch();

    const handleCategoryChange = (event) => {
        dispatch(setCategory(event.target.value));
    };

    return (
        <div className='flex justify-between items-center border-b-2 mb-4 bg-slate-300 overflow-auto' >
            {categories.map(category => (
                <button className='px-4 py-2 rounded-xl text-lg hover:text-white hover:upperline transition delay-75 hover:bg-slate-400' value={category} onClick={handleCategoryChange}  > {category} </button>
            ))}

        </div>
    );
};

export default CategoryFilter;
