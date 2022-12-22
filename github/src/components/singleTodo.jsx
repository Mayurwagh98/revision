import React from "react";
import { useParams } from "react-router-dom";

let SingleTodo = () => {

    const {id} = useParams()
    
  return (
    <>
      <h1>Todos_item</h1>
      <h2>This is {id}</h2>
      <h1>Todos_item</h1>
      <h1>Todos_item</h1>
      <h1>Todos_item</h1>
      <h1>Todos_item</h1>

    </>
  );
};

export {SingleTodo}
