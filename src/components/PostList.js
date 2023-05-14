// PostList.js

import React from 'react';
import { Link } from 'react-router-dom';

const PostList = () => {
  return (
    <div className='List_Entry'>
      <p><Link to="/post-link">Title of the Post</Link></p> {/* Use Link instead of a */}
      <p>May 14, 2023</p>
    </div>
  );
};

export default PostList;
