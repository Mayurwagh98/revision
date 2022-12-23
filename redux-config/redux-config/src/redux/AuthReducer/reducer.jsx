import * as types from "./actionTypes";

let initialState = {
  isAuth: false,
  token: "",
  isAuthLoading: false,
  isAuthError: false,
};

let reducer = (oldState = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return {
        ...oldState,
        isAuthLoading: true,
      };
    case types.USER_LOGIN_SUCCESS:
      return {
        ...oldState,
        isAuthLoading: false,
        token: payload,
        isAuth: true,
      };

    case types.USER_LOGIN_FAILURE:
      return {
        ...oldState,
        isAuthLoading: false,
        token: "",
        isAuthError: true,
        isAuth: false,
      };
  }
};

export { reducer };
