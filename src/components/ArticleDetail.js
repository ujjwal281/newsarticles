import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ArticleDetail = () => {
    const { title } = useParams();
    const article = useSelector(state => 
        state.articles.items.find(article => article.title === title)
    );

    if (!article) {
        return <p>Article not found.</p>;
    }

    return (
        <div className="article-detail">
            <div className= 'p-11'>
                <h1 className='flex justify-start font-bold text-3xl'>{article.title}</h1>
                <img className='flex justify-start size-80' src={article.urlToImage} alt={article.title} />
                <p>{article.content}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">Read full article</a>
                <br/>
                {article.publishedAt}
            </div>
            
        </div>
    );
};

export default ArticleDetail;
