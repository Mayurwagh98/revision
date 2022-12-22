import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import { useState } from "react";

let SingleTodo = () => {
  const { id } = useParams();
  let [data, setData] = useState({})

  let getData = () => {
    axios
      .get(`http://localhost:8080/todos/${id}`) // making the patch request to update the status
      .then((res) => {
        data = res.data
        setData(data)
        console.log(data);
      })
      .catch((e) => {
        throw Error("error ");
      });
  };

  useEffect(() =>{
    getData()
  }, [])

  return (
    <>
      <h1>Todos_item</h1>
      <h2>Title :- {data.title}</h2>
      <h2>ID :-  {id}</h2>

    </>
  );
};

export { SingleTodo };
