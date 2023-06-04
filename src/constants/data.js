import images from './images';

const data = {
  users: [
    {
      userId: 1,
      name: {
        first: 'Imani',
        last: 'Sherif',
        fullName() { return (`${this.first} ${this.last}`); },
      },
      online: false,
      profilePictureID: [
        images.profilePicture1sm, images.profilePicture1md, images.profilePicture1bg,
      ],
      profile: {
        coverPhoto: images.coverPhoto9,
        description: 'Hello friends, Nice to meet you.',
        userInformation: {
          country: { val: 'France', public: true },
          state: { val: 'Paris Region' },
          city: { val: 'Parice' },
          relationship: { val: 'Single', public: true },
          dob: { val: '12/04/199', public: false },
          friends: { val: 273, public: true },
          followers: { val: 113, public: true },
          following: { val: 86, public: true },
          gender: { val: 'Male', public: true },
        },
      },
      posts: [
        {
          userId: 1,
          postId: 1,
          body: {
            text: 'If God is for me, who can be against me!',
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
                return data.users.filter((i) => i.userId === this.commenterId)[0].name.fullName();
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
      userId: 2,
      name: {
        first: 'Bella',
        last: 'Santon',
        fullName() { return (`${this.first} ${this.last}`); },
      },
      online: true,
      profilePictureID: [
        images.profilePicture2sm, images.profilePicture2md, images.profilePicture2bg,
      ],
      profile: {
        coverPhoto: images.coverPhoto4,
        description: 'Hello friends, Nice to meet you.',
        userInformation: {
          country: { val: 'Spain', public: true },
          state: { val: 'Madrid' },
          city: { val: 'Madrid' },
          relationship: { val: 'Single', public: true },
          dob: { val: '12/04/199', public: false },
          friends: { val: 273, public: true },
          followers: { val: 113, public: true },
          following: { val: 86, public: true },
          gender: { val: 'Male', public: true },
        },
      },
      posts: [],
    },
    {
      userId: 3,
      name: {
        first: 'Jake',
        last: 'Musa',
        fullName() { return (`${this.first} ${this.last}`); },
      },
      online: false,
      profilePictureID: [
        images.profilePicture3sm, images.profilePicture3md, images.profilePicture3bg,
      ],
      profile: {
        coverPhoto: images.coverPhoto1,
        description: 'Hello friends, Nice to meet you.',
        userInformation: {
          country: { val: 'Namibia', public: true },
          state: { val: 'central Khomas Region' },
          city: { val: 'Windhoek' },
          relationship: { val: 'Single', public: true },
          dob: { val: '12/04/199', public: false },
          friends: { val: 273, public: true },
          followers: { val: 113, public: true },
          following: { val: 86, public: true },
          gender: { val: 'Male', public: true },
        },
      },
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
                return data.users.filter((i) => i.userId === this.commenterId)[0].name.fullName();
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
      profilePictureID: [
        images.profilePicture4sm, images.profilePicture4md, images.profilePicture4bg,
      ],
      profile: {
        coverPhoto: images.coverPhoto3,
        description: 'Hello friends, Nice to meet you.',
        userInformation: {
          country: { val: 'Mexico', public: true },
          state: { val: 'Mexico City' },
          city: { val: 'Mexico City' },
          relationship: { val: 'Single', public: true },
          dob: { val: '12/04/199', public: false },
          friends: { val: 273, public: true },
          followers: { val: 113, public: true },
          following: { val: 86, public: true },
          gender: { val: 'Male', public: true },
        },
      },
      posts: [
        {
          userId: 4,
          postId: 1,
          body: {
            text: 'There\'s nothing like the great outdoors to help you reset after a stressful week.',
            postImg: [images.picturePost7],
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
                return data.users.filter((i) => i.userId === this.commenterId)[0].name.fullName();
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
                return data.users.filter((i) => i.userId === this.commenterId)[0].name.fullName();
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
      profilePictureID: [
        images.profilePicture5sm, images.profilePicture5md, images.profilePicture5bg,
      ],
      profile: {
        coverPhoto: images.coverPhoto7,
        description: 'Hi there. Feel free to reach out',
        userInformation: {
          country: { val: 'USA', public: true },
          state: { val: 'Massachusetts' },
          city: { val: 'Boston' },
          relationship: { val: 'Single', public: true },
          dob: { val: '12/04/199', public: false },
          friends: { val: 273, public: true },
          followers: { val: 113, public: true },
          following: { val: 86, public: true },
          gender: { val: 'Male', public: true },
        },
      },
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
                return data.users.filter((i) => i.userId === this.commenterId)[0].name.fullName();
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
      profilePictureID: [
        images.profilePicture6sm, images.profilePicture6md, images.profilePicture6bg,
      ],
      profile: {
        coverPhoto: images.coverPhoto8,
        description: 'Hello friends, Nice to meet you.',
        userInformation: {
          country: { val: 'Canada', public: true },
          state: { val: 'Ontario' },
          city: { val: 'Toronto' },
          relationship: { val: 'Single', public: true },
          dob: { val: '12/04/199', public: false },
          friends: { val: 273, public: true },
          followers: { val: 113, public: true },
          following: { val: 86, public: true },
          gender: { val: 'Male', public: true },
        },
      },
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
                return data.users.filter((i) => i.userId === this.commenterId)[0].name.fullName();
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
      profilePictureID: [
        images.profilePicture7sm, images.profilePicture7md, images.profilePicture7bg,
      ],
      profile: {
        coverPhoto: images.coverPhoto11,
        description: 'Hello friends, Nice to meet you.',
        userInformation: {
          country: { val: 'Zambia', public: true },
          state: { val: 'Copperbelt' },
          city: { val: 'Kasama' },
          relationship: { val: 'Single', public: true },
          dob: { val: '12/04/199', public: false },
          friends: { val: 273, public: true },
          followers: { val: 113, public: true },
          following: { val: 86, public: true },
          gender: { val: 'Male', public: true },
        },
      },
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
                return data.users.filter((i) => i.userId === this.commenterId)[0].name.fullName();
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
      profilePictureID: [
        images.profilePicture8sm, images.profilePicture8md, images.profilePicture8bg,
      ],
      profile: {
        coverPhoto: images.coverPhoto2,
        description: 'Hey, I\'m Dominic. Feel free to reach out.',
        userInformation: {
          country: { val: 'United Kingdom', public: true },
          state: { val: 'London' },
          city: { val: 'London' },
          relationship: { val: 'Single', public: true },
          dob: { val: '12/04/199', public: false },
          friends: { val: 273, public: true },
          followers: { val: 113, public: true },
          following: { val: 86, public: true },
          gender: { val: 'Male', public: true },
        },
      },
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
                return data.users.filter((i) => i.userId === this.commenterId)[0].name.fullName();
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
      profilePictureID: [
        images.profilePicture9sm, images.profilePicture9md, images.profilePicture9bg,
      ],
      profile: {
        coverPhoto: images.coverPhoto10,
        description: 'Hello friends, Nice to meet you.',
        userInformation: {
          country: { val: 'South Africa', public: true },
          state: { val: 'Eastern Cape' },
          city: { val: 'Bhisho' },
          relationship: { val: 'Single', public: true },
          dob: { val: '12/04/199', public: false },
          friends: { val: 273, public: true },
          followers: { val: 113, public: true },
          following: { val: 86, public: true },
          gender: { val: 'Male', public: true },
        },
      },
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
                return data.users.filter((i) => i.userId === this.commenterId)[0].name.fullName();
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
      profilePictureID: [
        images.profilePicture10sm, images.profilePicture10md, images.profilePicture10bg,
      ],
      profile: {
        coverPhoto: images.coverPhoto5,
        description: 'Hello friends, Nice to meet you.',
        userInformation: {
          country: { val: 'Zambia', public: true },
          state: { val: 'Lusaka' },
          city: { val: 'Lusaka' },
          relationship: { val: 'Single', public: true },
          dob: { val: '12/04/199', public: false },
          friends: { val: 273, public: true },
          followers: { val: 113, public: true },
          following: { val: 86, public: true },
          gender: { val: 'Male', public: true },
        },
      },
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
                return data.users.filter((i) => i.userId === this.commenterId)[0].name.fullName();
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
      profilePictureID: [
        images.profilePicture11sm, images.profilePicture11bg, images.profilePicture11bg,
      ],
      profile: {
        coverPhoto: images.coverPhoto6,
        description: 'Hello friends, Nice to meet you.',
        userInformation: {
          country: { val: 'Zambia', public: true },
          state: { val: 'Lusaka' },
          city: { val: 'Lusaka' },
          relationship: { val: 'Single', public: true },
          dob: { val: '12/04/199', public: false },
          friends: { val: 273, public: true },
          followers: { val: 113, public: true },
          following: { val: 86, public: true },
          gender: { val: 'Male', public: true },
        },
      },
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
                return data.users.filter((i) => i.userId === this.commenterId)[0].name.fullName();
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
