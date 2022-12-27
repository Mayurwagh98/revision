import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess,
} from "../Redux/action";

let TodoInput = ({ getTodos }) => {
  let [text, setText] = useState("");
  let dispatch = useDispatch();

  let handleaddTodo = () => {
    if (text) {
      let payload = {
        title: text,
        status: false,
      };
      dispatch(addTodoRequest());
      axios
        .post("http://localhost:8080/todos", payload)
        .then((res) => {
          dispatch(addTodoSuccess(res.data));
          setText("");
          console.log(res.data);
        })
        .catch((e) => {
          dispatch(addTodoFailure);
          console.log(e);
        });
    }
  };

  useEffect(() => {
    getTodos();
  });
  return (
    <>
      <h1>Todos Input</h1>
      <input
        type="text"
        placeholder="enter todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleaddTodo}>Add</button>
    </>
  );
};

export { TodoInput };
