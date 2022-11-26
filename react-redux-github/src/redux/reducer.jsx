import {
  Get_Todos_Request,
  Get_Todos_Success,
  Get_Todos_Failure,
} from "./actionTypes";

let Reducer = (state, action) => {
  switch (action.type) {
    case Get_Todos_Request:
      return {
        ...state, //making the copy of the state from the real state, so after dispatching it will be able to compare, 
        //hence react will know that changes are done, so it will re-render
        isLoading: true,
      };
    case Get_Todos_Success:
      return {
        ...state, //making the copy of the state from the real state, so after dispatching it will be able to compare, 
        //hence react will know that changes are done, so it will re-render
        isLoading: false, // by default keeping isLoading value as false
        todos: action.payload, // once the request is successfull, then passing the todo as a value
      };
    case Get_Todos_Failure:
      return {
        ...state, //making the copy of the state from the real state, so after dispatching it will be able to compare, 
        //hence react will know that changes are done, so it will re-render
        isLoading: false, // by default keeping isLoading value as false
        todos: [], //if request had failed to keeping the todos as empty, as request has failed to no todo will be added
        isError: true, //as request has failed then making isError status as true
      };
    default:
      return state;
  }
};

export { Reducer };
