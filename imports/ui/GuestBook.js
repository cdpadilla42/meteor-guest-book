import React from 'react';
import { Meteor } from 'meteor/meteor';
import GuestForm from './GuestForm';
import { useTracker } from 'meteor/react-meteor-data';

const GuestBook = () => {
  const data = useTracker(() => {
    const posts = Meteor.subscribe('posts');

    return posts;
  });

  return (
    <div>
      <GuestForm />
    </div>
  );
};

export default GuestBook;
