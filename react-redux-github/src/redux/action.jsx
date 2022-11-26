import {
  Get_Todos_Request,
  Get_Todos_Success,
  Get_Todos_Failure,
} from "./actionTypes";

let getTodosRequest = () => {
  return {
    type: Get_Todos_Request,
  };
};

let getTodosSuccess = (payload) => {
  return {
    type: Get_Todos_Success,
    payload,
  };
};

let getTodosFailure = () => {
  return {
    type: Get_Todos_Failure,
  };
};

let postTodoRequest = () => {
  return {
    type: "Post_Todo_Request",
  };
};

let postTodoSuccess = (payload) => {
  return {
    type: "Post_Todo_Success",
    payload,
  };
};

let postTodoFailure = () => {
  return {
    type: "Post_Todo_Failure",
  };
};

export {
  getTodosRequest,
  getTodosSuccess,
  getTodosFailure,
  postTodoRequest,
  postTodoSuccess,
  postTodoFailure,
};
