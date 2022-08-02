import { usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  posts: [
    { id: 1, message: "Hey everybody! I will win in this war", likes: 15 },
    { id: 2, message: "Hashiramaaaa! Where are you?!", likes: 23 },
    { id: 3, message: "I'm going to devour ten tail", likes: 49 },
    { id: 4, message: "I'll kill you, Tobirama", likes: 76 },
  ],
  newPostText: null,
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
        message: state.newPostText,
        likes: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });

export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setProfile = (userId) => (dispatch) => {
  usersAPI.getUserProfile(userId).then((data) => {
    dispatch(setUserProfile(data));
  });
};

export default profileReducer;
