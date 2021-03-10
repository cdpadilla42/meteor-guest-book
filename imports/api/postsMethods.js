import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { PostsCollection } from './posts';

Meteor.methods({
  'posts.add'(newPost) {
    PostsCollection.schema.validate(newPost);

    PostsCollection.insert({
      ...newPost,
      createdAt: new Date(),
    });
  },

  'posts.remove'(postID) {
    check(postID, String);

    const post = PostsCollection.findOne({ _id: postID });

    if (!post) {
      throw new Meteor.Error('Could not find post');
    }

    PostsCollection.remove(postID);
  },
});
