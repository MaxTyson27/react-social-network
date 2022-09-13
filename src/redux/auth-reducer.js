import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_VALIDATE = "SET_VALIDATE";

let defaultState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  validateLogin: false,
  errorMessage: null,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        isAuth: true,
        ...action.payload,
        validateLogin: false,
        errorMessage: null,
      };
    }
    case SET_VALIDATE: {
      return {
        ...state,
        validateLogin: true,
        errorMessage: action.error,
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

export const isValidLogin = (validateLogin, error) => ({
  type: SET_VALIDATE,
  validateLogin,
  error,
});

export const loginUser = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUser());
    } else {
      const error = data.messages.length > 0 ? data.messages[0] : "Some error";
      dispatch(isValidLogin(true, error));
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
  return authAPI.isAuth().then((data) => {
    if (data.resultCode === 0) {
      const { id: userId, login, email } = data.data;
      dispatch(setAuthUserData(userId, email, login, true));
    }
  });
};

export default authReducer;
