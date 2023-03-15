import * as types from "./actionTypes";

let initialState = {
  token: "",
  isLoading: false,
  isError: false,
};

let reducer = (oldState = initialState, action) => {
  let { type, payload } = action;
  // console.log(payload)

  switch (type) {
    case types.Get_Login_Request:
      return {
        ...oldState,
        isLoading: true,
      };

    case types.Get_Login_Success:
      return {
        token: payload,
        isLoading: false,
      };

    case types.Get_Login_Failure:
      return {
        ...oldState,
        isError: true,
        isLoading: false,
      };

    default:
      return oldState;
  }
};
export { reducer };
