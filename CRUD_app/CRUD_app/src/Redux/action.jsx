import * as types from "./actionTypes";
import axios from "axios";
import { useDispatch } from "react-redux";

//---------------------- Action Creators-------------------
const getAlbumRequest = () => {
  return {
    type: types.Get_albums_Request,
  };
};
const getAlbumSuccess = (payload) => {
  return {
    type: types.Get_albums_Success,
    payload,
  };
};
const getAlbumFailure = () => {
  return {
    type: types.Get_albums_Failure,
  };
};

// --------------- Getting the data----------------------------

let getMusicRecords = (queryParams) => (dispatch) => {
  dispatch(getAlbumRequest());
  // dispatch({type: types.Get_albums_Request})
  return axios
    .get("http://localhost:8080/albums", queryParams)
    .then((res) => {
      dispatch(getAlbumSuccess(res.data));
      // console.log(res.data);
    })
    .catch((e) => {
      dispatch(getAlbumFailure(e));
      console.log(e);
    });
};

export { getAlbumFailure, getAlbumRequest, getAlbumSuccess, getMusicRecords };
