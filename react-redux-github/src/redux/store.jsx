
import {legacy_createStore}  from "redux";
import {Reducer} from "./reducer"

let store = legacy_createStore(Reducer, {
  todos: [],
  isLoading: false,
  isError: false,
  status: false,
});

export { store };
