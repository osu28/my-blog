import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PostList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://rppw7rzboi.execute-api.us-east-2.amazonaws.com/dev/articles')
      .then(response => response.json())
      .then(data => setArticles(data.reverse()))
      .catch(error => console.log(error));
  }, []);

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
