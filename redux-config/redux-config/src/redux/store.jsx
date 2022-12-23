import { legacy_createStore, combineReducers } from "redux"; //importing leagacy_createSotre from redux, which will help to create the store
import { reducer as AppReducer } from "../redux/AppReducer/reducer";
import { reducer as AuthReducer } from "../redux/AuthReducer/reducer";

let rootReducer = combineReducers({ AppReducer, AuthReducer });

let store = legacy_createStore(
  //creating store and passing two arguments, state (Reducer) and action (object which has todos, isLoading, isError and status)
  rootReducer
);

export { store };
