import * as types from "./actionTypes";

let initialState = {
  musicRecord: [],
  isLoading: false,
  isError: false,
};

let reducer = (oldstate = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case types.Get_albums_Request:
      return {
        ...oldstate,
        isLoading: true,
      };

    case types.Get_albums_Success:
      return {
        ...oldstate,
        musicRecord: payload,
        isLoading: false,
      };
    case types.Get_albums_Failure:
      return {
        ...oldstate,
        isLoading: false,
        isError: true,
      };

    default:
      return oldstate;
  }
};

export { reducer };
