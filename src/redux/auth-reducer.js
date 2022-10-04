import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "my-app/auth/SET_USER_DATA";
const SET_VALIDATE = "my-app/auth/SET_VALIDATE";
const GET_CAPTCHA_URL_SUCCESS = "my-app/auth/GET_CAPTCHA_URL_SUCCESS";

let defaultState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  validateLogin: false,
  errorMessage: null,
  captchaUrl: null,
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
        captchaUrl: null,
      };
    }
    case SET_VALIDATE: {
      return {
        ...state,
        validateLogin: true,
        errorMessage: action.error,
        captchaUrl: null,
      };
    }

    case GET_CAPTCHA_URL_SUCCESS: {
      return {
        ...state,
        captchaUrl: action.url,
      };
    }

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth, captcha) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth, captcha },
});

export const isValidLogin = (validateLogin, error) => ({
  type: SET_VALIDATE,
  validateLogin,
  error,
});

export const getCaptchaUrlSuccess = (url) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  url,
});

export const loginUser =
  (email, password, rememberMe, captcha) => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
      dispatch(setAuthUser(captcha));
    } else if (data.resultCode === 10 && data.fieldsErrors[0]?.field) {
      dispatch(getCaptcha());
    } else {
      const error = data.messages.length > 0 ? data.messages[0] : "Some error";
      dispatch(isValidLogin(true, error));
    }
  };

export const logoutUser = () => async (dispatch) => {
  const data = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export const setAuthUser = (captcha) => async (dispatch) => {
  const data = await authAPI.isAuth();
  if (data.resultCode === 0) {
    const { id: userId, login, email } = data.data;
    dispatch(setAuthUserData(userId, email, login, true, captcha));
  }
};

export const getCaptcha = () => async (dispatch) => {
  const data = await securityAPI.getCaptcha();
  const captchaUrl = data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export default authReducer;
