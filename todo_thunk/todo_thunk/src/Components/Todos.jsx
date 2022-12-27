import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodoRequest,
  getTodoSuccess,
  getTodoFailure,
} from "../Redux/action";
import { TodoInput } from "./TodoInput";

let Todos = () => {
  let todos = useSelector((state) => state.todos);
  let dispatch = useDispatch();
  let getTodos = () => {
    dispatch(getTodoRequest());
    axios
      .get(`http://localhost:8080/todos`)
      .then((res) => {
        dispatch(getTodoSuccess(res.data));
        // console.log(res.data);
      })
      .catch((e) => {
        dispatch(getTodoFailure());
        console.log(e);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <h1>Todos</h1>
      <TodoInput getTodos={getTodos} />
      {todos.length > 0 &&
        todos.map((item) => {
          return (
            <div key={item.id}>
              {item.title} {item.status ? "True" : "False"}
            </div>
          );
        })}
    </>
  );
};

export { Todos };
