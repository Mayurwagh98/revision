import * as types from "./actionTypes";
import axios from "axios";

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

let getMusicRecords = () => {
  axios
    .get("http://localhost:8080/albums")
    .then((res) => {
      console.log(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
};

export { getAlbumFailure, getAlbumRequest, getAlbumSuccess, getMusicRecords };
