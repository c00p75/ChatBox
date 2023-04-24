import images from './images';

const data = {
  userProfile: {
    UserId: 1,
    name: {
      first: 'Imani',
      last: 'Sherif',
      fullName() { return (`${this.first} ${this.last}`); },
    },
    online: false,
    profilePictureID: images.profilePicture1sm,
    posts: [
      {
        userId: 1,
        postId: 1,
        body: {
          text: 'lorem Ipsum',
          postImg: [],
        },
        reactions: {
          like: 1,
          sad: 0,
          love: 0,
          angry: 2,
          wow: 4,
          funny: 7,
        },
        comments: [
          {
            commentId: 1,
            commentDate: new Date(2023, 2, 9, 11, 10, 0),
            commenterId: 3,
            commenterName() {
              data.users.filter((i) => i.userId === this.commenterId)[0].name.fullName();
            },
            body: 'nice',
            replies: [
              {
                userId: 2,
                body: 'I agree',
                commentReplyDate: new Date(2023, 2, 9, 11, 10, 0),
              },
            ],
            reactions: {
              like: 1,
              sad: 0,
              love: 0,
              angry: 2,
              wow: 4,
              funny: 7,
            },
          },
        ],
        date: new Date(2023, 3, 19, 4, 40, 0),
      },
    ],
  },

  users: [
    {
      userId: 2,
      name: {
        first: 'Bella',
        last: 'Santon',
        fullName() { return (`${this.first} ${this.last}`); },
      },
      online: true,
      profilePictureID: images.profilePicture2sm,
      posts: [
        {
          userId: 2,
          postId: 1,
          body: {
            text: 'lorem Ipsum',
            postImg: [],
          },
          reactions: {
            like: 1,
            sad: 0,
            love: 0,
            angry: 2,
            wow: 4,
            funny: 7,
          },
          comments: [
            {
              commentId: 1,
              commentDate: new Date(2023, 2, 9, 11, 10, 0),
              commenterId: 3,
              commenterName() {
                data.users.filter((i) => i.userId === this.commenterId)[0].name.fullName();
              },
              body: 'nice',
              replies: [
                {
                  userId: 2,
                  body: 'I agree',
                  commentReplyDate: new Date(2023, 2, 9, 11, 10, 0),
                },
              ],
              reactions: {
                like: 1,
                sad: 0,
                love: 0,
                angry: 2,
                wow: 4,
                funny: 7,
              },
            },
          ],
          date: new Date(2023, 3, 19, 4, 40, 0),
        },
      ],
    },
    {
      userId: 3,
      name: {
        first: 'Jake',
        last: 'Musa',
        fullName() { return (`${this.first} ${this.last}`); },
      },
      online: false,
      profilePictureID: images.profilePicture3sm,
      posts: [
        {
          userId: 3,
          postId: 1,
          body: {
            text: 'lorem Ipsum',
            postImg: [],
          },
          reactions: {
            like: 1,
            sad: 0,
            love: 0,
            angry: 2,
            wow: 4,
            funny: 7,
          },
          comments: [
            {
              commentId: 1,
              commentDate: new Date(2023, 2, 9, 11, 10, 0),
              commenterId: 3,
              commenterName() {
                data.users.filter((i) => i.userId === this.commenterId)[0].name.fullName();
              },
              body: 'nice',
              replies: [
                {
                  userId: 2,
                  body: 'I agree',
                  commentReplyDate: new Date(2023, 2, 9, 11, 10, 0),
                },
              ],
              reactions: {
                like: 1,
                sad: 0,
                love: 0,
                angry: 2,
                wow: 4,
                funny: 7,
              },
            },
          ],
          date: new Date(2023, 3, 19, 4, 40, 0),
        },
      ],
    },
    {
      userId: 4,
      name: {
        first: 'Carlos',
        last: 'Moralez',
        fullName() { return (`${this.first} ${this.last}`); },
      },
      online: false,
      profilePictureID: images.profilePicture4sm,
      posts: [
        {
          userId: 4,
          postId: 1,
          body: {
            text: 'lorem Ipsum',
            postImg: [],
          },
          reactions: {
            like: 1,
            sad: 0,
            love: 0,
            angry: 2,
            wow: 4,
            funny: 7,
          },
          comments: [
            {
              commentId: 1,
              commentDate: new Date(2023, 2, 9, 11, 10, 0),
              commenterId: 3,
              commenterName() {
                data.users.filter((i) => i.userId === this.commenterId)[0].name.fullName();
              },
              body: 'nice',
              replies: [
                {
                  userId: 2,
                  body: 'I agree',
                  commentReplyDate: new Date(2023, 2, 9, 11, 10, 0),
                },
              ],
              reactions: {
                like: 1,
                sad: 0,
                love: 0,
                angry: 2,
                wow: 4,
                funny: 7,
              },
            },
          ],
          date: new Date(2023, 3, 19, 4, 40, 0),
        },
      ],
    },
    {
      userId: 5,
      name: {
        first: 'Chan',
        last: 'Evans',
        fullName() { return (`${this.first} ${this.last}`); },
      },
      online: false,
      profilePictureID: images.profilePicture5sm,
      posts: [
        {
          userId: 5,
          postId: 1,
          body: {
            text: 'lorem Ipsum',
            postImg: [],
          },
          reactions: {
            like: 1,
            sad: 0,
            love: 0,
            angry: 2,
            wow: 4,
            funny: 7,
          },
          comments: [
            {
              commentId: 1,
              commentDate: new Date(2023, 2, 9, 11, 10, 0),
              commenterId: 3,
              commenterName() {
                data.users.filter((i) => i.userId === this.commenterId)[0].name.fullName();
              },
              body: 'nice',
              replies: [
                {
                  userId: 2,
                  body: 'I agree',
                  commentReplyDate: new Date(2023, 2, 9, 11, 10, 0),
                },
              ],
              reactions: {
                like: 1,
                sad: 0,
                love: 0,
                angry: 2,
                wow: 4,
                funny: 7,
              },
            },
          ],
          date: new Date(2023, 3, 19, 4, 40, 0),
        },
      ],
    },
    {
      userId: 6,
      name: {
        first: 'Jonathan',
        last: 'Collins',
        fullName() { return (`${this.first} ${this.last}`); },
      },
      online: false,
      profilePictureID: images.profilePicture6sm,
      posts: [
        {
          userId: 6,
          postId: 1,
          body: {
            text: "There's nothing quite like being in touch with mother nature. I was certianly born for the great out doors!!",
            postImg: [images.picturePost1],
          },
          reactions: {
            like: 62,
            sad: 0,
            love: 0,
            angry: 2,
            wow: 4,
            funny: 7,
          },
          comments: [
            {
              commentId: 1,
              commentDate: new Date(2023, 2, 9, 11, 10, 0),
              commenterId: 3,
              commenterName() {
                data.users.filter((i) => i.userId === this.commenterId)[0].name.fullName();
              },
              body: 'nice',
              replies: [
                {
                  userId: 2,
                  body: 'I agree',
                  commentReplyDate: new Date(2023, 2, 9, 11, 10, 0),
                },
                {
                  userId: 4,
                  body: 'Yeah, totaly!',
                  commentReplyDate: new Date(2023, 2, 9, 11, 10, 0),
                },
              ],
              reactions: {
                like: 1,
                sad: 0,
                love: 0,
                angry: 2,
                wow: 4,
                funny: 7,
              },
            },
          ],
          date: new Date(2023, 3, 19, 4, 40, 0),
        },
      ],
    },
    {
      userId: 7,
      name: {
        first: 'Mapalo',
        last: 'Soka',
        fullName() { return (`${this.first} ${this.last}`); },
      },
      online: true,
      profilePictureID: images.profilePicture7sm,
      posts: [
        {
          userId: 7,
          postId: 1,
          body: {
            text: 'lorem Ipsum',
            postImg: [],
          },
          reactions: {
            like: 1,
            sad: 0,
            love: 0,
            angry: 2,
            wow: 4,
            funny: 7,
          },
          comments: [
            {
              commentId: 1,
              commentDate: new Date(2023, 2, 9, 11, 10, 0),
              commenterId: 3,
              commenterName() {
                data.users.filter((i) => i.userId === this.commenterId)[0].name.fullName();
              },
              body: 'nice',
              replies: [
                {
                  userId: 2,
                  body: 'I agree',
                  commentReplyDate: new Date(2023, 2, 9, 11, 10, 0),
                },
              ],
              reactions: {
                like: 1,
                sad: 0,
                love: 0,
                angry: 2,
                wow: 4,
                funny: 7,
              },
            },
          ],
          date: new Date(2023, 3, 19, 4, 40, 0),
        },
      ],
    },
    {
      userId: 8,
      name: {
        first: 'Dominic',
        last: 'Ross',
        fullName() { return (`${this.first} ${this.last}`); },
      },
      online: false,
      profilePictureID: images.profilePicture8sm,
      posts: [
        {
          userId: 8,
          postId: 1,
          body: {
            text: 'lorem Ipsum',
            postImg: [],
          },
          reactions: {
            like: 1,
            sad: 0,
            love: 0,
            angry: 2,
            wow: 4,
            funny: 7,
          },
          comments: [
            {
              commentId: 1,
              commentDate: new Date(2023, 2, 9, 11, 10, 0),
              commenterId: 3,
              commenterName() {
                data.users.filter((i) => i.userId === this.commenterId)[0].name.fullName();
              },
              body: 'nice',
              replies: [
                {
                  userId: 2,
                  body: 'I agree',
                  commentReplyDate: new Date(2023, 2, 9, 11, 10, 0),
                },
              ],
              reactions: {
                like: 1,
                sad: 0,
                love: 0,
                angry: 2,
                wow: 4,
                funny: 7,
              },
            },
          ],
          date: new Date(2023, 3, 19, 4, 40, 0),
        },
      ],
    },
    {
      userId: 9,
      name: {
        first: 'Sarah',
        last: 'Moon',
        fullName() { return (`${this.first} ${this.last}`); },
      },
      online: true,
      profilePictureID: images.profilePicture9sm,
      posts: [
        {
          userId: 9,
          postId: 1,
          body: {
            text: 'lorem Ipsum',
            postImg: [],
          },
          reactions: {
            like: 1,
            sad: 0,
            love: 0,
            angry: 2,
            wow: 4,
            funny: 7,
          },
          comments: [
            {
              commentId: 1,
              commentDate: new Date(2023, 2, 9, 11, 10, 0),
              commenterId: 3,
              commenterName() {
                data.users.filter((i) => i.userId === this.commenterId)[0].name.fullName();
              },
              body: 'nice',
              replies: [
                {
                  userId: 2,
                  body: 'I agree',
                  commentReplyDate: new Date(2023, 2, 9, 11, 10, 0),
                },
              ],
              reactions: {
                like: 1,
                sad: 0,
                love: 0,
                angry: 2,
                wow: 4,
                funny: 7,
              },
            },
          ],
          date: new Date(2023, 3, 19, 4, 40, 0),
        },
      ],
    },
    {
      userId: 10,
      name: {
        first: 'Jaene',
        last: 'Kunda',
        fullName() { return (`${this.first} ${this.last}`); },
      },
      online: false,
      profilePictureID: images.profilePicture10sm,
      posts: [
        {
          userId: 10,
          postId: 1,
          body: {
            text: 'lorem Ipsum',
            postImg: [],
          },
          reactions: {
            like: 1,
            sad: 0,
            love: 0,
            angry: 2,
            wow: 4,
            funny: 7,
          },
          comments: [
            {
              commentId: 1,
              commentDate: new Date(2023, 2, 9, 11, 10, 0),
              commenterId: 3,
              commenterName() {
                data.users.filter((i) => i.userId === this.commenterId)[0].name.fullName();
              },
              body: 'nice',
              replies: [
                {
                  userId: 2,
                  body: 'I agree',
                  commentReplyDate: new Date(2023, 2, 9, 11, 10, 0),
                },
              ],
              reactions: {
                like: 1,
                sad: 0,
                love: 0,
                angry: 2,
                wow: 4,
                funny: 7,
              },
            },
          ],
          date: new Date(2023, 3, 19, 4, 40, 0),
        },
      ],
    },
    {
      userId: 11,
      name: {
        first: 'George',
        last: "M'sapenda",
        fullName() { return (`${this.first} ${this.last}`); },
      },
      online: true,
      profilePictureID: images.profilePicture11sm,
      posts: [
        {
          userId: 11,
          postId: 1,
          body: {
            text: 'It has been a couple of years since I attained my first degree. Crossing this milestone and many others that opened so many doors for me would not have happened without the blessing of family. I love you guys!',
            postImg: [
              images.picturePost8,
              images.picturePost9,
              images.picturePost6,
              images.picturePost7,
            ],
          },
          reactions: {
            like: 1,
            sad: 0,
            love: 0,
            angry: 2,
            wow: 4,
            funny: 7,
          },
          comments: [
            {
              commentId: 1,
              commentDate: new Date(2023, 2, 9, 11, 10, 0),
              commenterId: 3,
              commenterName() {
                data.users.filter((i) => i.userId === this.commenterId)[0].name.fullName();
              },
              body: 'nice',
              replies: [
                {
                  userId: 8,
                  body: 'I agree',
                  commentReplyDate: new Date(2023, 2, 9, 11, 10, 0),
                },
              ],
              reactions: {
                like: 0,
                sad: 0,
                love: 0,
                angry: 0,
                wow: 0,
                funny: 0,
              },
            },
          ],
          date: new Date(2023, 3, 19, 4, 40, 0),
        },
      ],
    },
  ],
};

export default data;
