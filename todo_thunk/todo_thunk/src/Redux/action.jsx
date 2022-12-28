import * as types from "./actionTypes";
import axios from 'axios'

const getTodoRequest = () => {
  return {
    type: types.Get_Todo_Request,
  };
};
const getTodoSuccess = (payload) => {
  return {
    type: types.Get_Todo_Success,
    payload
    
  };
};
const getTodoFailure = () => {
  return {
    type: types.Get_Todo_Failure,
  };
};

let getTodos = (dispatch) => {
  dispatch(getTodoRequest());
  axios
    .get(`http://localhost:8080/todos`)
    .then((res) => {
      dispatch(getTodoSuccess(res.data));
      // console.log(res.data);
    })
    .catch((e) => {
      dispatch(getTodoFailure());
      console.log(e);
    });
};
const addTodoRequest = () => {
  return {
    type: types.Add_Todo_Request,
  };
};
const addTodoSuccess = () => {
  return {
    type: types.Add_Todo_Success,
    
  };
};
const addTodoFailure = () => {
  return {
    type: types.Add_Todo_Failure,
  };
};

export {
  getTodoFailure,
  getTodoRequest,
  getTodoSuccess,
  getTodos,
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess,
};
