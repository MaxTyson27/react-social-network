import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const LOGIN_USER = "LOGIN_USER";

let defaultState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        isAuth: true,
        ...action.payload,
      };
    }

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const loginUser = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUser());
    }
  });
};

export const logoutUser = () => (dispatch) => {
  authAPI.logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};

export const setAuthUser = () => (dispatch) => {
  authAPI.isAuth().then((data) => {
    if (data.resultCode === 0) {
      const { id: userId, login, email } = data.data;
      dispatch(setAuthUserData(userId, email, login, true));
    }
  });
};

export default authReducer;
