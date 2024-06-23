import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getArticles } from '../store/articleSlice';
// import { getArticles, setCategory, setPage } from '../store/articleSlice';
import CircularProgress from '@mui/material/CircularProgress';

import Article from './Article';
import CategoryFilter from './CategoryFilter';
import Pagination from './Pagination';

const ArticleList = () => {
    const dispatch = useDispatch();
    const articles = useSelector(state => state.articles.items);
    const status = useSelector(state => state.articles.status);
    const currentCategory = useSelector(state => state.articles.currentCategory);
    const currentPage = useSelector(state => state.articles.currentPage);

    React.useEffect(() => {
        dispatch(getArticles({ category: currentCategory, page: currentPage }));
    }, [dispatch, currentCategory, currentPage]);

    return (
        <div>
            <CategoryFilter />
            {status === 'loading' && <p className='flex justify-center items-center'><CircularProgress/></p>}
            {status === 'failed' && <p className='flex justify-center items-center'>Error loading articles.</p>}
            <div className="article-list">
                {articles.map(article => (
                    <Article key={article.url} article={article} />
                ))}
            </div>
            <Pagination />
        </div>
    );
};

export default ArticleList;
