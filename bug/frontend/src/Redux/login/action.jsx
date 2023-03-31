import * as types from "./actionTypes";
import axios from "axios";

let login_request = () => {
  return {
    type: types.Login_Request,
  };
};
let login_success = (payload) => {
  return {
    type: types.Login_Request,
    payload,
  };
};
let login_failure = () => {
  return {
    type: types.Login_Request,
  };
};

let login = (loginUser) => async (dispatch) => {
  dispatch(login_request());
  await axios
    .post("http://localhost:8000/api/login", loginUser)
    .then((res) => {
      dispatch(login_success(res.data.token));
      console.log(res.data.token);
      localStorage.setItem("token", res.data.token)
    })
    .catch((e) => {
      dispatch(login_failure(e.message));
      console.log(e);
    });
};

export { login_request, login_failure, login_success, login };
