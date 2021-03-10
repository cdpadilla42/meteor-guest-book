import React from 'react';
import { Meteor } from 'meteor/meteor';

const Post = ({ post }) => {
  function removePost() {
    Meteor.call('posts.remove', post._id);
  }

  return (
    <li>
      <span>{post.name}:</span> <span>{post.message}</span>
      <button onClick={removePost}>&times;</button>
    </li>
  );
};

export default Post;
