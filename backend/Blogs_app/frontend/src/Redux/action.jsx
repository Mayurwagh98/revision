import * as types from "./actionTypes";
import axios from "axios";

let getUser = (payload) => {
  // console.log(payload)
  return {
    type: types.Get_User,
    payload,
  };
};

let loginUserAction = (loginUserData) => async (dispatch) => {
  await axios
    .post("http://localhost:8000/api/login", loginUserData)
    .then((res) => {
      dispatch(getUser(res.data.token));
      // console.log(res.data.token);

    })
    .catch((e) => {
      console.log(e.message);
    });
};

export { getUser,loginUserAction };
