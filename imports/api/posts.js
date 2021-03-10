import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const PostsCollection = new Mongo.Collection('posts');

PostsCollection.schema = new SimpleSchema({
  name: { type: String },
  message: { type: String },
});

export { PostsCollection };
