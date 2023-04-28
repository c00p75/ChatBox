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
          like: 1, sad: 0, love: 0, angry: 2, wow: 4, funny: 7,
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
              like: 1, sad: 0, love: 0, angry: 2, wow: 4, funny: 7,
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
      posts: [],
      // posts: [
      //   {
      //     userId: 2,
      //     postId: 1,
      //     body: {
      //       text: 'lorem Ipsum',
      //       postImg: [],
      //     },
      //     reactions: {
      //      like: 1, sad: 0, love: 0, angry: 2, wow: 4, funny: 7
      //     },
      //     comments: [
      //       {
      //         commentId: 1,
      //         commentDate: new Date(2023, 2, 9, 11, 10, 0),
      //         commenterId: 3,
      //         commenterName() {
      //           data.users.filter((i) => i.userId === this.commenterId)[0].name.fullName();
      //         },
      //         body: 'nice',
      //         replies: [
      //           {
      //             userId: 2,
      //             body: 'I agree',
      //             commentReplyDate: new Date(2023, 2, 9, 11, 10, 0),
      //           },
      //         ],
      //         reactions: {
      //          like: 1, sad: 0, love: 0, angry: 2, wow: 4, funny: 7
      //         },
      //       },
      //     ],
      //     date: new Date(2023, 3, 19, 4, 40, 0),
      //   },
      // ],
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
            text: 'Consistency in growing one\'s skills is underrated. Have you ever noticed that even after mastering a skill, when you stop implementing or practicing it, it simply fades away? They say that what is not practiced is soon forgoten. So to everyone pursuing mastery and being the best craftsman they can be, always remember to stay consistent, stay focused, and stay curiouse! 📌',
            postImg: [],
          },
          reactions: {
            like: 61, sad: 0, love: 14, angry: 0, wow: 9, funny: 2,
          },
          comments: [
            {
              commentId: 1,
              commentDate: new Date(2023, 2, 9, 11, 10, 0),
              commenterId: 2,
              commenterName() {
                data.users.filter((i) => i.userId === this.commenterId)[0].name.fullName();
              },
              body: 'Well said. In the end, consistency has a compounding effect that can lead us to peak performance 🙌',
              replies: [
                {
                  userId: 3,
                  body: 'I couldn\'t agree more.',
                  commentReplyDate: new Date(2023, 2, 9, 11, 10, 0),
                },
              ],
              reactions: {
                like: 3, sad: 0, love: 5, angry: 0, wow: 0, funny: 0,
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
            text: 'There\'s nothing like the great outdoors to help you reset after a stressful week.',
            postImg: [images.picturePost5],
          },
          reactions: {
            like: 5, sad: 0, love: 19, angry: 2, wow: 4, funny: 1,
          },
          comments: [
            {
              commentId: 1,
              commentDate: new Date(2023, 2, 9, 11, 10, 0),
              commenterId: 8,
              commenterName() {
                data.users.filter((i) => i.userId === this.commenterId)[0].name.fullName();
              },
              body: 'Works all the time',
              replies: [
                {
                  userId: 2,
                  body: 'Unless you try it in the middle winter😂🤣',
                  commentReplyDate: new Date(2023, 2, 9, 11, 10, 0),
                },
              ],
              reactions: {
                like: 1, sad: 0, love: 0, angry: 2, wow: 4, funny: 7,
              },
            },
            {
              commentId: 1,
              commentDate: new Date(2023, 2, 9, 11, 10, 0),
              commenterId: 3,
              commenterName() {
                data.users.filter((i) => i.userId === this.commenterId)[0].name.fullName();
              },
              body: 'You coulda invited me though',
              replies: [
                {
                  userId: 4,
                  body: 'Totaly skipped my mind. You can still come through.',
                  commentReplyDate: new Date(2023, 2, 9, 11, 10, 0),
                },
              ],
              reactions: {
                like: 1, sad: 0, love: 0, angry: 2, wow: 4, funny: 7,
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
            text: `The pessimist sees dificulty in every situation😣.
            The optimist sees opportunity in every difficulty🤔.
            WHICH ONE ARE YOU?`,
            postImg: [],
          },
          reactions: {
            like: 41, sad: 3, love: 20, angry: 2, wow: 4, funny: 7,
          },
          comments: [
            {
              commentId: 1,
              commentDate: new Date(2023, 2, 9, 11, 10, 0),
              commenterId: 3,
              commenterName() {
                data.users.filter((i) => i.userId === this.commenterId)[0].name.fullName();
              },
              body: 'Food for thought.',
              replies: [
                {
                  userId: 2,
                  body: 'I agree',
                  commentReplyDate: new Date(2023, 2, 9, 11, 10, 0),
                },
              ],
              reactions: {
                like: 1, sad: 0, love: 0, angry: 2, wow: 4, funny: 7,
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
            like: 62, sad: 0, love: 0, angry: 2, wow: 4, funny: 7,
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
                like: 1, sad: 0, love: 0, angry: 2, wow: 4, funny: 7,
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
            text: 'Black and pround. #african_queen always #be_you',
            postImg: [images.picturePost3],
          },
          reactions: {
            like: 1, sad: 0, love: 0, angry: 2, wow: 4, funny: 7,
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
                like: 1, sad: 0, love: 0, angry: 2, wow: 4, funny: 7,
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
            text: 'I\'ve learned a very important lesson the hard way today. Before you invest in something, take time to understand it',
            postImg: [],
          },
          reactions: {
            like: 1, sad: 14, love: 1, angry: 0, wow: 1, funny: 3,
          },
          comments: [
            {
              commentId: 1,
              commentDate: new Date(2023, 2, 9, 11, 10, 0),
              commenterId: 11,
              commenterName() {
                data.users.filter((i) => i.userId === this.commenterId)[0].name.fullName();
              },
              body: 'I don\'t know what happened buddy, but we\'re learning from our failures. Keep your eyes on the prize!',
              replies: [
                {
                  userId: 9,
                  body: 'Losses make for greater stories.',
                  commentReplyDate: new Date(2023, 2, 9, 11, 10, 0),
                },
              ],
              reactions: {
                like: 5, sad: 0, love: 0, angry: 0, wow: 0, funny: 0,
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
            text: 'My little sister is mostly annoying, but I don\'t not love her!!',
            postImg: [images.picturePost2],
          },
          reactions: {
            like: 1, sad: 0, love: 0, angry: 2, wow: 4, funny: 7,
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
                like: 1, sad: 0, love: 0, angry: 2, wow: 4, funny: 7,
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
            text: 'I\'m working 16 hours a day, 7 day\'s a week, 52 weeks in a year, and people still call my success luck??😖😖 ',
            postImg: [],
          },
          reactions: {
            like: 8, sad: 1, love: 6, angry: 21, wow: 8, funny: 17,
          },
          comments: [
            {
              commentId: 1,
              commentDate: new Date(2023, 2, 9, 11, 10, 0),
              commenterId: 7,
              commenterName() {
                data.users.filter((i) => i.userId === this.commenterId)[0].name.fullName();
              },
              body: 'Things look rosey from the outside looking in 🤷🏾‍♀️😂',
              replies: [
                {
                  userId: 5,
                  body: 'She\'s soo amazing because she really makes it look easy.',
                  commentReplyDate: new Date(2023, 2, 9, 11, 10, 0),
                },
              ],
              reactions: {
                like: 1, sad: 0, love: 0, angry: 2, wow: 4, funny: 7,
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
            like: 1, sad: 0, love: 0, angry: 2, wow: 4, funny: 7,
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
                like: 0, sad: 0, love: 0, angry: 0, wow: 0, funny: 0,
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
