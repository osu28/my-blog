import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API } from 'aws-amplify';

const PostList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await API.get('rest1', '/articles');
      setArticles(response.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {articles.map(article => (
        <div className='List_Entry' key={article._id}>
          <p><Link to={`/articles/${article.slug}`}>{article.title}</Link></p>
          <p>{article.preview}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
