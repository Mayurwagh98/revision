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
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

let Todos = () => {
  let dispatch = useDispatch(); //using dispatch hook from react-redux
  // let isLoading = useSelector((state) => state.isLoading)
  // let todos = useSelector((state) => state.todos)
  // let [payload, setPayload] = useState();
  let { todos, isLoading, isError } = useSelector((state) => {
    return {
      todos: state.todos,
      isLoading: state.isLoading,
      isError: state.isError,
    };
  }, shallowEqual); //shallowEqual helps to stop the default behaviour of comparing two diff objects and
  //goes only 1 level deep

  let getTodos = () => {
    dispatch(getTodosRequest()); //dispatching getTodoReuqest function to make a request
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
      // setPayload({
      //   //passing the payload
      //   title,
      //   status: false,
      // });
      let payload = {
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

  let handleStatus = (item) => {
    let { status } = item; //destructring the status from item
    status = !status; // chaging the value of status if false then true and vice a versa
    let val = { status };
    axios
      .patch(`http://localhost:8080/todos/${item.id}`, val) // making the patch request to update the status
      .then((res) => {
        alert("Status Changed");
      })
      .catch((e) => {
        throw Error("error ");
      });
    // setPayload(todos);
    // addTodo(payload)
    console.log(todos);
  };

  // -------------------------- Delete ------------------------
  let deleteItem = (id) => {
    axios
      .delete(`http://localhost:8080/todos/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // --------------------- Navigating the user to edit page -------------------
  let navigate = useNavigate();
  let editItem = (item) => {
    // localStorage.setItem("Edit", JSON.stringify(item))
    navigate(`/todo/${item.id}/edit`);
  };

  return (
    <>
      <h1>Todos</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <TodoInput handleAddTodo={handleAddTodo} />
      )}
      {todos.length > 0 &&
        todos.map((item, index) => {
          return (
            <>
              <div key={index}>
                <Link to={`/todo/${item.id}`}>{item.title}</Link>
                <p>{item.status ? "Completed" : "Incomplete"}</p>

                <button onClick={() => handleStatus(item)}>Toggle</button>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
                <button onClick={() => editItem(item)}>Edit</button>
              </div>
              
            </>
          );
        })}
    </>
  );
};

export { Todos };
