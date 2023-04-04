import * as types from "./actionTypes";

let critical = (payload) => {
  return {
    type: types.CriticalSeverity,
    payload,
  };
};
let major = (payload) => {
  return {
    type: types.MajorSeverity,
    payload,
  };
};
let medium = (payload) => {
  return {
    type: types.MediumSeverity,
    payload,
  };
};
let low = (payload) => {
  return {
    type: types.LowSeverity,
    payload,
  };
};

export { critical, major, medium, low };
