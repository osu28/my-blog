import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from 'aws-amplify';

const Post = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetchArticle();
  }, [slug]);

  const fetchArticle = async () => {
    try {
      const response = await API.get('rest1', `/articles/${slug}`);
      setArticle(response);
    } catch (error) {
      console.log(error);
    }
  };

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
