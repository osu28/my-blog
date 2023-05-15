import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetchArticle();
  }, []);

  const fetchArticle = async () => {
    try {
      const response = await fetch(`http://localhost:3000/articles/${id}`);
      const data = await response.json();
      setArticle(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <div className="Article">
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
};

export default Post;
