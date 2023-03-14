import * as types from "./actionTypes";

let initialState = {
  token: "",
};

let reducer = (oldState = initialState, action) => {
  let { type, payload } = action;
  console.log(payload)
  
  switch (type) {
    case types.Get_User:
      return {
        ...oldState,
        token: payload,
      };

    default:
      return oldState;
  }
};
export { reducer };
