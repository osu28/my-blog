import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PostList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/articles')
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {articles.map(article => (
        <div className='List_Entry' key={article._id}>
          <h2><Link to={`/articles/${article._id}`}>{article.title}</Link></h2>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
