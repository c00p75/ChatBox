// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';
import data from './data';

const newUser = (firstName, lastName, profilePicture) => {
  const user = {
    id: uuidv4(),
    name: {
      first: firstName,
      last: lastName,
      fullName() { return (`${this.first} ${this.last}`); },
    },
    online: false,
    profilePictureID: profilePicture,
    posts: [],
  };
  return user;
};

const newPost = (userId, postText, postImg = []) => {
  const post = {
    userId,
    postId: uuidv4(),
    body: {
      text: postText,
      postImg,
    },
    reactions: {
      like: 0,
      sad: 0,
      love: 0,
      angry: 0,
      wow: 0,
      funny: 0,
    },
    comments: [],
    date: Date(),
  };
  return post;
};

const newComment = (commenterId, commentText) => {
  const comment = {
    commentId: uuidv4(),
    commentDate: new Date(),
    commenterId,
    commenterName: data.users.filter((i) => i.userId === commenterId)[0].name.fullName(),
    body: commentText,
    replies: [],
    reactions: {
      like: 0,
      sad: 0,
      love: 0,
      angry: 0,
      wow: 0,
      funny: 0,
    },
    date: Date(),
  };
  return comment;
};

const newReply = (userId, replyText) => {
  const reply = {
    userId,
    body: replyText,
    commentReplyDate: new Date(),
  };
  return reply;
};

export default {
  newUser,
  newPost,
  newComment,
  newReply,
};
