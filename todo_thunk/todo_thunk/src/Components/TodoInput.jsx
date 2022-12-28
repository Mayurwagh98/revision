import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess,
  getTodos,
} from "../Redux/action";

let TodoInput = () => {
  let [text, setText] = useState("");
  let dispatch = useDispatch();

  let addTodo = () => {
    if (text) {
      let payload = {
        title: text,
        status: false,
      };
      dispatch(addTodoRequest());
      return axios
        .post("http://localhost:8080/todos", payload)
        .then((res) => {
          dispatch(addTodoSuccess());

          setText("");
          console.log(res.data);
        })
        .catch((e) => {
          dispatch(addTodoFailure);
          console.log(e);
        });
    }
  };

  let handleaddTodo = () => {
    // add the data in db.json file first, and then make a get request.
    addTodo().then(() => {
      // getTodos(dispatch);
      dispatch(getTodos)
    });
  };

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
