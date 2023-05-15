import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/articles/${slug}`)
      .then(response => response.json())
      .then(data => setArticle(data))
      .catch(error => console.log(error));
  }, [slug]);

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <div className='Article'>
      <h2>{article.title}</h2>
      <p className='Article_Content'>{article.content}</p>
    </div>
  );
};

export default Post;