import { Meteor } from 'meteor/meteor';
import { PostsCollection } from './posts';

Meteor.publish('posts', function publishPosts() {
  return PostsCollection.find({});
});
