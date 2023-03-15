import * as types from "./actionTypes";
import axios from "axios";

let get_login_request = () => {
  return {
    type: types.Get_Login_Request,
  };
};

let get_login_success = (payload) => {
  // console.log(payload)
  return {
    type: types.Get_Login_Success,
    payload,
  };
};

let get_login_failure = () => {
  return {
    type: types.Get_Login_Failure,
  };
};

let loginUserAction = (loginUserData) => async (dispatch) => {
  dispatch(get_login_request());
  await axios
    .post("http://localhost:8000/api/login", loginUserData)
    .then((res) => {
      dispatch(get_login_success(res.data.token));
      // console.log(res.data.token);
      localStorage.setItem("token", res.data.token);
    })
    .catch((e) => {
      dispatch(get_login_failure());
      console.log(e.message);
    });
};

export { loginUserAction };
