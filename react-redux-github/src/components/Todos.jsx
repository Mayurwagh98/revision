import React from "react";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  getTodosRequest,
  getTodosSuccess,
  getTodosFailure,
  postTodoRequest,
  postTodoSuccess,
  postTodoFailure,
} from "../redux/action";
import axios from "axios";
import { TodoInput } from "./TodoInput";

let Todos = () => {
  let dispatch = useDispatch(); //using dispatch hook from react-redux 
  // let isLoading = useSelector((state) => state.isLoading)
  // let todos = useSelector((state) => state.todos)
  let { todos, isLoading, isError } = useSelector((state) => {
    return {
      todos: state.todos,
      isLoading: state.isLoading,
      isError: state.isError,
    };
  }, shallowEqual); //shallowEqual helps to stop the default behaviour of comparing two diff objects and 
  //goes only 1 level deep

  let getTodos = () => {
    dispatch(getTodosRequest()) //dispatching getTodoReuqest function to make a request
    axios
      .get("http://localhost:8080/todos")
      .then((res) => {
        dispatch(getTodosSuccess(res.data)); //dispatching getTodoSuccess function once the request is successfull
        console.log(res.data);
      })
      .catch((e) => {
        dispatch(getTodosFailure(e)); //dispatching getTodoFailure function if request has failed
      });
  };

  let addTodo = (title) => {
    if (title) {
      let payload = { //passing the payload 
        title,
        status: false,
      };

      dispatch(postTodoRequest()); //dispatching postTodoRequest function to make a post request
      axios
        .post("http://localhost:8080/todos", payload)
        .then((res) => {
          dispatch(postTodoSuccess(res.data)); //dispatching postTodoSuccess function once the post request is successfull
        })
        .catch((e) => {
          dispatch(postTodoFailure(e)); //dispatching postTodoFailure if post request has failed
        });
    }
  };

  let handleAddTodo = (text) => {
    addTodo(text);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <h1>Todos</h1>
      {isLoading ? (
        <div>Loading...</div> {/*/if isLoading state is true then it will show Loading...*/}
      ) : (
        <TodoInput handleAddTodo={handleAddTodo} /> {/*else it will show todo lists*/}
      )}
      {todos.length > 0 &&
        todos.map((item) => { //mapping todos
          return (
            <div key={item.id}>
              {item.title} - {item.status ? "True" : "False"}
            </div>
          );
        })}
    </>
  );
};

export { Todos };
