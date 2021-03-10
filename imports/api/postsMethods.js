import { Meteor } from 'meteor/meteor';
import { PostsCollection } from './posts';

Meteor.methods({
  'posts.add'(newPost) {
    PostsCollection.schema.validate(newPost);

    PostsCollection.insert({
      ...newPost,
      createdAt: new Date(),
    });
  },
});
