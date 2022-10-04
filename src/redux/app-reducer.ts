import { setAuthUser } from "./auth-reducer.ts";

export type DefaultStateType = {
  initialized: boolean
}

type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS,
}

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let defaultState: DefaultStateType = {
  initialized: false,
};

const appReducer = (state: DefaultStateType = defaultState, action: InitializedSuccessActionType): DefaultStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
      };
    }

    default:
      return state;
  }
};

export const initializedSuccess = (): InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch: any) => {
  const promise = dispatch(setAuthUser());

  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
