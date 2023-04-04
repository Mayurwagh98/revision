import { loginReducer } from "./login/reducer";
import { bugReducer } from "./bug/reducer";
import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

let rootReducer = combineReducers({ loginReducer, bugReducer });

let store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
