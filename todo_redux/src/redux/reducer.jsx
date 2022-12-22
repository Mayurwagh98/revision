import {
    Get_Todos_Request,
    Get_Todos_Success,
    Get_Todos_Failure,
  } from "./actionTypes";
  
  let Reducer = (state, action) => {
    switch (action.type) {
      case Get_Todos_Request:
        return {
          ...state,
          isLoading: true,
        };
      case Get_Todos_Success:
        return {
          ...state,
          isLoading: false,
          todos: action.payload,
        };
      case Get_Todos_Failure:
        return {
          ...state,
          isLoading: false,
          todos: [],
          isError: true,
        };
      default:
        return state;
    }
  };
  
  export { Reducer };
  