import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE_POST-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const SET_USER_PHOTO = "SET_USER_PHOTO";
const UPDATE_USER_PROFILE = "UPDATE_USER_PROFILE";

type PostType = {
  id: number,
  message: string,
  likes: number
}

type ContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}

type PhotosType = {
  small: string | null
  large: string | null
}

type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  aboutMe: string
  contacts: ContactsType
  photos: PhotosType
}



let initialState = {
  posts: [
    { id: 1, message: "Hey everybody! I will win in this war", likes: 15 },
    { id: 2, message: "Hashiramaaaa! Where are you?!", likes: 23 },
    { id: 3, message: "I'm going to devour ten tail", likes: 49 },
    { id: 4, message: "I'll kill you, Tobirama", likes: 76 },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: "",
};

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any):InitialStateType  => {
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
        } as ProfileType,
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
type AddPostActionType = {
  type: typeof ADD_POST
  post: string
}

export const addPost = (post: string): AddPostActionType => ({ type: ADD_POST, post });

type DeletePostActionType = {
  type: typeof DELETE_POST
  postId: number
}

export const deletePost = (postId: number): DeletePostActionType => ({ type: DELETE_POST, postId });

type SetUserPhotoActionType = {
  type: typeof SET_USER_PHOTO
  photo: string
}

export const setUserPhoto = (photo: string): SetUserPhotoActionType => ({ type: SET_USER_PHOTO, photo });

type UpdateUserProfileActionType = {
  type: typeof UPDATE_USER_PROFILE
  profile: ProfileType
}
export const updateUserProfile = (profile: ProfileType): UpdateUserProfileActionType => ({
  type: UPDATE_USER_PROFILE,
  profile,
});

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}

export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({
  type: SET_USER_PROFILE,
  profile,
});

type SetUserStatusActionType = {
  type: typeof SET_USER_STATUS
  status: string
}

export const setUserStatus = (status: string): SetUserStatusActionType => ({
  type: SET_USER_STATUS,
  status,
});

export const updateProfile = (profile: ProfileType) => async (dispatch: any, getState) => {
  const data = await profileAPI.saveUserProfile(profile);
  if (data.resultCode === 0) {
    dispatch(updateUserProfile(profile));
  }
};

export const setProfile = (userId: number) => async (dispatch: any) => {
  const data = await usersAPI.getUserProfile(userId);
  dispatch(setUserProfile(data));
};

export const getUserStatus = (userId: number) => async (dispatch: any) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(setUserStatus(data));
};

export const savePhoto = (photo: string) => async (dispatch: any) => {
  const responce = await profileAPI.setPhoto(photo);
  if (responce.data.resultCode === 0) {
    dispatch(setUserPhoto(responce.data.data.photos));
  }
};

export const updateUserStatus = (status: string) => async (dispatch: any) => {
  const data = await profileAPI.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};

export default profileReducer;
