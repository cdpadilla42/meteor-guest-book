import { Meteor } from 'meteor/meteor';
import { PostsCollection } from '../imports/api/posts';
import '../imports/api/postsPublication';
import '../imports/api/postsMethods';

function insertPost(newPost) {
  PostsCollection.schema.validate(newPost);
  PostsCollection.insert({ ...newPost, createdAt: new Date() });
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (PostsCollection.find().count() === 0) {
    [
      {
        name: 'Chris',
        message: 'This shreds!!',
      },
      {
        name: 'Jenn',
        message: 'This rocks!!',
      },
      {
        name: 'Miranda',
        message: 'Cool!!',
      },
    ].forEach(insertPost);
  }
});
