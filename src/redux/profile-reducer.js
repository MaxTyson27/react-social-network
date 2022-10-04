import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE_POST-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const SET_USER_PHOTO = "SET_USER_PHOTO";
const UPDATE_USER_PROFILE = "UPDATE_USER_PROFILE";

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

    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }

    case SET_USER_PHOTO: {
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.photo,
        },
      };
    }

    case UPDATE_USER_PROFILE: {
      return {
        ...state,
        profile: {
          ...state.profile,
          ...action.profile,
        },
      };
    }

    default:
      return state;
  }
};

export const addPost = (post) => ({ type: ADD_POST, post });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const setUserPhoto = (photo) => ({ type: SET_USER_PHOTO, photo });
export const updateUserProfile = (profile) => ({
  type: UPDATE_USER_PROFILE,
  profile,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});

export const updateProfile = (profile) => async (dispatch, getState) => {
  const data = await profileAPI.saveUserProfile(profile);
  if (data.resultCode === 0) {
    dispatch(updateUserProfile(profile));
  }
};

export const setProfile = (userId) => async (dispatch) => {
  const data = await usersAPI.getUserProfile(userId);
  dispatch(setUserProfile(data));
};

export const getUserStatus = (userId) => async (dispatch) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(setUserStatus(data));
};

export const savePhoto = (photo) => async (dispatch) => {
  const responce = await profileAPI.setPhoto(photo);
  if (responce.data.resultCode === 0) {
    dispatch(setUserPhoto(responce.data.data.photos));
  }
};

export const updateUserStatus = (status) => async (dispatch) => {
  const data = await profileAPI.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};

export default profileReducer;
