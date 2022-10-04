import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "my-app/auth/SET_USER_DATA";
const SET_VALIDATE = "my-app/auth/SET_VALIDATE";
const GET_CAPTCHA_URL_SUCCESS = "my-app/auth/GET_CAPTCHA_URL_SUCCESS";


let defaultState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  validateLogin: false,
  errorMessage: null as string | null,
  captchaUrl: null as string | null,
};

export type DefaultStateType = typeof defaultState

const authReducer = (state: DefaultStateType = defaultState, action: SetUserDataActionType | IsValidLoginActionType | getCaptchaUrlSuccessActionType): DefaultStateType => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
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

type SetUserDataPayActionloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean 
  captcha: string | null
}

type SetUserDataActionType = {
  type: typeof SET_USER_DATA,
  payload: SetUserDataPayActionloadType
}



export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean, captcha: string | null): SetUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth, captcha },
});

type IsValidLoginActionType = {
  type: typeof SET_VALIDATE
  validateLogin: boolean
  error: string
}

export const isValidLogin = (validateLogin: boolean, error: string): IsValidLoginActionType => ({
  type: SET_VALIDATE,
  validateLogin,
  error,
});

type getCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  url: string
}

export const getCaptchaUrlSuccess = (url: string): getCaptchaUrlSuccessActionType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  url,
});

export const loginUser =
  (email: string, password: string, rememberMe: boolean, captcha: any) => async (dispatch: any) => {
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

export const logoutUser = () => async (dispatch: any) => {
  const data = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false, null));
  }
};

export const setAuthUser = (captcha: string) => async (dispatch: any) => {
  const data = await authAPI.isAuth();
  if (data.resultCode === 0) {
    const { id: userId, login, email } = data.data;
    dispatch(setAuthUserData(userId, email, login, true, captcha));
  }
};

export const getCaptcha = () => async (dispatch: any) => {
  const data = await securityAPI.getCaptcha();
  const captchaUrl = data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export default authReducer;
