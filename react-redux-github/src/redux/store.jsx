
import {legacy_createStore}  from "redux"; //importing leagacy_createSotre from redux, which will help to create the store
import {Reducer} from "./reducer"

let store = legacy_createStore(Reducer, {  //creating store and passing two arguments, state (Reducer) and action (object which has todos, isLoading, isError and status)
  todos: [],
  isLoading: false,
  isError: false,
  status: false,
});

export { store };
