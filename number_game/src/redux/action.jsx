import * as types from "./actionTypes";

let get_number_request = () => {
  return {
    type: types.Get_Number_Request,
  };
};

let get_number_success = () => {
  return {
    type: types.Get_Number_Success,
    payload,
  };
};

let get_number_failure = () => {
  return {
    type: types.Get_Number_Failure,
  };
};
