import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

let initialState = {
  posts: [
    { id: 1, message: "Hey everybody! I will win in this war", likes: 15 },
    { id: 2, message: "Hashiramaaaa! Where are you?!", likes: 23 },
    { id: 3, message: "I'm going to devour ten tail", likes: 49 },
    { id: 4, message: "I'll kill you, Tobirama", likes: 76 },
  ],
  status: "",
  info: [
    {
      id: 1,
      name: "Uchiha Madara",
      avatar:
        "https://i.pinimg.com/originals/77/b7/a7/77b7a77a99a2edfca3ef6defccc94241.jpg",
      clan: "Uchiha",
      city: "Fire",
      country: "Konoha",
      skills: "Sharingan, Susano",
    },
  ],
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: Date.now(),
        message: action.post,
        likes: 0,
      };

      return {
        ...state,
        posts: [newPost, ...state.posts],
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }

    case SET_USER_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }

    default:
      return state;
  }
};

export const addPost = (post) => ({ type: ADD_POST, post });

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});

export const setProfile = (userId) => (dispatch) => {
  usersAPI.getUserProfile(userId).then((data) => {
    dispatch(setUserProfile(data));
  });
};

export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((data) => {
    dispatch(setUserStatus(data));
  });
};

export const updateUserStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  });
};

export default profileReducer;
