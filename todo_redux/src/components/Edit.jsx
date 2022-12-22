import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

let Edit = () => {
  //   let editData = JSON.parse(localStorage.getItem("Edit"))
  //   console.log(editData);
  let [data, setData] = useState({});
  let [text, setText] = useState("");
  let { id } = useParams();

  let getData = () => {
    axios
      .get(`http://localhost:8080/todos/${id}`)
      .then((res) => {
        data = res.data;
        setData(data);
        setText(data.title); // to show the title in the input field
        console.log(data);
      })
      .catch((e) => {
        throw Error(`Didn't got the data`);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  let editItem = () => {
    let val = { title: text };
    axios
      .patch(`http://localhost:8080/todos/${id}`, val)
      .then((res) => {
        alert("Changed");
      })
      .catch((e) => {
        throw Error("error ");
      });
  };

  return (
    <>
      <h1>Edit page</h1>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <h3>{data.title}</h3>
        <p>{data.id}</p>
        <p>{data.status ? "Compelted" : "Incomplete"}</p>
        <button onClick={editItem}>Edit & Update</button>
      </div>
    </>
  );
};

export { Edit };
