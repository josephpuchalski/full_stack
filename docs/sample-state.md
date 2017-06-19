{
  session: {
    currentUser: {
      id: 1,
      username: "Joseph"
    },
    errors: []
  },

  photos: {
    1: {
      id: 3,
      username: "Joseph",
      profilePhoto: "joseph_puchalski.jpg",
      url: "thailand.png",
      caption: "traveling",
      createdAt: "date",
      uploadedAt: "date",
      likesCount: 20000,
      currentUserLiked: false,
      commentsCount: 2,
      comments: {
        1: {
          id: 1,
          username: "smith",
          body: "nice shot",
          createdAt: "timestamp"
        },
        2: {
          id: 2,
          username: "jones",
          body: "i have been there",
          createdAt: "timestamp"
        }
      }
    },

  user: {
    id: 1,
    username: "JoeyP",
    name: "Joseph Puchalski",
    bio: "Learning to code",
    hasProfilePhoto: true,
    profilePic: "joseph_puchalski.jpg",
    followersCount: 30000,
    followers: {
      1: {
        id: 1,
        username: 'smith',
        name: 'smith jones',
        profilePic: 'smith_jones.png',
        currentUserFollowed: true,
        createdAt: "timestamp"
      },
    },
    followingsCount: 1,
    following: {
      1: {
        id: 1,
        username: 'john',
        name: 'johnny',
        profilePic: 'john.jpg',
        currentUserFollowed: true,
        createdAt: "timestamp"
      }
    },
    photos: {
      1: {
        id: 1,
        urlMedium: "my_travels.jpg",
        createdAt: "timestamp",
        likesCount: 100,
        commentsCount: 32
      },
    }
  },

  photoInfo: {
    id: 1,
    username: "Joey P",
    profilePic: "joeph_puchalski_profile.jpg",
    url: "traveling_man.jpg",
    caption: "new place every day",
    createdAt: "timestamp",
    uploadedAt: "1000 days ago",
    likesCount: 200,
    currentUserLiked: true,
    commentsCount: 20,
    comments: {
      1: {
        id: 1,
        username: "smith",
        body: "howdy",
        createdAt: "timestamp"
      },
      2: {
        id: 2,
        username: "jones",
        body: "cool shot",
        createdAt: "timestamp"
      }
    }
  },
  errors: {
    photoUpload: [],
    profilePicUpload: [],
    accountEdit: ["Username is required"],
    accountPassword: ["Invalid password..."]
  },
  loading: false,
  search: {
    1: {
      id: 1,
      username: "JoeyP",
      name: "JoeyP",
      profilePic: "joseph_puchalski.png"
  },
  users: {
    1: {
      id: 1,
      username: "Joey",
      name: "JoeyP",
      profilePic: "joseph_puchalski.jpg",
      currentUserFollowed: false
    },
  }
}
