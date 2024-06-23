import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../store/slices/ArticlesSlice';
import ArticleList from '../components/ArticleList';
import Pagination from '../components/Pagination';
import CategoryFilter from '../components/CategoryFilter';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const HomePage = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.articles);
  const status = useSelector((state) => state.articles.status);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('latest');

  useEffect(() => {
    dispatch(fetchArticles(selectedCategory));
  }, [dispatch, selectedCategory]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const articlesPerPage = 10;
  console.log(articles);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const displayedArticles = articles.slice((currentPage - 1) * articlesPerPage, currentPage * articlesPerPage);

  return (
    <div className=" p-16">

      <CategoryFilter  selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />

      {status === 'loading' ? (
        <Box><CircularProgress/></Box>
      ) : (
        <ArticleList articles={displayedArticles} />
      )}

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default HomePage;
