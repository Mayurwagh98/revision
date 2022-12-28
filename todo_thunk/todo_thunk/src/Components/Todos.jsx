import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../Redux/action";
import { TodoInput } from "./TodoInput";

let Todos = () => {
  let todos = useSelector((state) => state.todos);
  let dispatch = useDispatch();

  useEffect(() => {
    // getTodos(dispatch);
    dispatch(getTodos)
  }, []);

  return (
    <>
      <h1>Todos</h1>
      <TodoInput />
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
