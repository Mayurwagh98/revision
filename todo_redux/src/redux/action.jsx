import {
  Get_Todos_Request,
  Get_Todos_Success,
  Get_Todos_Failure,
  DELETE_TODOS_REQUEST,
  DELETE_TODOS_SUCCESS,
  DELETE_TODOS_FAILURE,
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

function DeleteRequest() {
  return {
    type: DELETE_TODOS_REQUEST,
  };
}

function DeleteSuccess() {
  return {
    type: DELETE_TODOS_SUCCESS,
  };
}

function DeleteFailure() {
  return {
    type: DELETE_TODOS_FAILURE,
  };
}
export {
  getTodosRequest,
  getTodosSuccess,
  getTodosFailure,
  postTodoRequest,
  postTodoSuccess,
  postTodoFailure,
};
