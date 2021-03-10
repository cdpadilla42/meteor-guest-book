import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

PostsCollection.schema = new SimpleSchema({
  name: { type: String },
  message: { type: String },
});

export const PostsCollection = new Mongo.Collection('posts');
