import {
  Get_Todos_Request,
  Get_Todos_Success,
  Get_Todos_Failure,
} from "./actionTypes";

//action objects creators
let getTodosRequest = () => { //function to make a get request
  return {
    type: Get_Todos_Request,
  };
};

let getTodosSuccess = (payload) => { //function success once the todo is got
  return {
    type: Get_Todos_Success,
    payload,
  };
};

let getTodosFailure = () => { //function to handle faliure
  return {
    type: Get_Todos_Failure,
  };
};

let postTodoRequest = () => { //functiob to make post request
  return {
    type: "Post_Todo_Request",
  };
};

let postTodoSuccess = (payload) => { // function to handle success post 
  return {
    type: "Post_Todo_Success",
    payload,
  };
};

let postTodoFailure = () => { //function to handle failure
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
