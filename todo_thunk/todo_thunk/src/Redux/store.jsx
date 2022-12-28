import { legacy_createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";

let customMiddleWare = (store) => (next) => (action) => {
  if (typeof action === "function") {
    // console.log(next) //----> "next" here is a dispatch function
    return action(store.dispatch);
  }

  return next(action); // "next" here means go the next middleware or reducer
};

let store = legacy_createStore(reducer, applyMiddleware(customMiddleWare));

export { store };
