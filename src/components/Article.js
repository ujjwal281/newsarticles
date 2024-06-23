import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({ article }) => {
    return (
        <div className="article">
            <img src={article.urlToImage} alt= {article.urlToImage} />
            {/* <h2 className=' font-extrabold text-lg hover:underline cursor-pointer'>{article.title}</h2> */}
            <Link className='font-extrabold text-lg hover:underline cursor-pointer' to={`/article/${article.title}`}>{article.title}</Link>
            <div>{article.publishedAt}</div>
        </div>
    );
};

export default Article;
