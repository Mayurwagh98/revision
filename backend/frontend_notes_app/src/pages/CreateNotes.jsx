import React, { useState } from "react";
import axios from "axios";

const CreateNotes = () => {
  let [text, setText] = useState({
    title: "",
    note: "",
    category: []
  });

  let token = localStorage.getItem("token");

  let handleNotes = (event) => {
    let { name, value } = event.target;
    if (name == "category") {
      value = value.split(",");
    }
    // console.log(value);
    setText({
      ...text,
      [name]: value,
    });
  };

  let createNote = async () => {
    // let val = text.category.forEach((el) => el.trim());
    // console.log(val);
    let conifg = {
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    };
    await axios
      .post("http://localhost:8080/api/notes/create", text, conifg)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <div>
      <h1>Create Notes</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="title"
          onChange={handleNotes}
          name="title"
          value={text.title}
        />
        <input
          type="text"
          placeholder="note"
          onChange={handleNotes}
          name="note"
          value={text.note}
        />
        <input
          type="text"
          placeholder="category"
          onChange={handleNotes}
          name="category"
          value={text.category}
        />
        <input type="submit" value="Add Note" onClick={createNote} />
      </form>
    </div>
  );
};

export { CreateNotes };
