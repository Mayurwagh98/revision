import * as types from "./actionTypes";

let initialState = {
  critical_severity: [],
  major_severity: [],
  medium_severity: [],
  low_severity: [],
};

let bugReducer = (oldState = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case types.CriticalSeverity:
      return {
        ...oldState,
        critical_severity: [...critical_severity, payload],
      };
    case types.MajorSeverity:
      return {
        ...oldState,
        major_severity: payload,
      };
    case types.MediumSeverity:
      return {
        ...oldState,
        medium_severity: payload,
      };
    case types.LowSeverity:
      return {
        ...oldState,
        low_severity: payload,
      };
    default:
      return oldState;
  }
};

export { bugReducer };
