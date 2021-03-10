import React from 'react';

const Post = ({ post }) => {
  return (
    <li>
      <span>{post.name}:</span> <span>{post.message}</span>
    </li>
  );
};

export default Post;
