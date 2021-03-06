import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { PostsCollection } from '../api/posts';
import Post from './Post';

const Posts = () => {
  const { posts, loading } = useTracker(() => {
    const handler = Meteor.subscribe('posts');

    if (!handler.ready()) {
      return { loading: true };
    }

    const posts = PostsCollection.find({}, { sort: { createdAt: -1 } }).fetch();
    return { posts };
  });

  if (loading) return <p>Loading...</p>;

  console.log(posts);
  return (
    <ul>
      {posts.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </ul>
  );
};

export default Posts;
