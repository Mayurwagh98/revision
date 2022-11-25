
import {legacy_createStore}  from "redux";
import { Reducer } from "./reducer";

let Store = legacy_createStore(Reducer, {count:12})

export {Store}