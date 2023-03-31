import * as types from "./actionTypes";

let initialState = {
  token: "",
  isLoading: false,
  isError: false,
};

let loginReducer = (oldState = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case types.Login_Request:
      return {
        ...oldState,
        isLoading: true,
      };

    case types.Login_Success:
      return {
        ...oldState,
        token: payload,
        isLoading: false,
      };

    case types.Login_Failure:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };
  }
};

export { loginReducer };
