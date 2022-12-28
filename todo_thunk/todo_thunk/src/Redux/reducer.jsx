import * as types from "./actionTypes";

let initialState = {
  todos: [],
  isLoading: false,
  isError: false,
};
let reducer = (oldState = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case types.Get_Todo_Request:
      return {
        ...oldState,
        isLoading: true,
      };

    case types.Get_Todo_Success:
      return {
        ...oldState,
        todos: payload,
        isLoading: false,
      };
    case types.Get_Todo_Failure:
      return {
        ...oldState,
        isError: true,
        isLoading: false,
      };
    case types.Add_Todo_Request:
      return {
        ...oldState,
        isLoading: true,
      };
    case types.Add_Todo_Success:
      return {
        ...oldState,
        // todos: [...oldState.todos, payload],
        // todos: payload,
        isLoading: false,
      };
    case types.Add_Todo_Failure:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };
    default:
      return oldState;
  }
};

export { reducer };
