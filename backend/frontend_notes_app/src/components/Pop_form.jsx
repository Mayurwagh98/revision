import React, { useState } from "react";
import "./New_modal.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import axios from "axios";

const New_modal = ({ item }) => {
  let [updateText, setUpdateText] = useState({
    title: "",
    note: "",
  });

  let user = JSON.parse(localStorage.getItem("user"));

  let updateNote = async () => {
    let config = {
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    };

    await axios
      .patch(
        `http://localhost:8080/api/notes/update/${item._id}`,
        updateText,
        config
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => console.log(e.message));
  };

  let handleChange = (event) => {
    let { name, value } = event.target;

    setUpdateText({
      ...updateText,
      [name]: value,
    });
  };

  return (
    <>
      <Popup trigger={<button> Edit</button>} position="top">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="title"
            name="title"
            value={updateText.title}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="note"
            name="note"
            value={updateText.note}
            onChange={handleChange}
          />

          <input type="submit" value="Update Note" onClick={updateNote} />
        </form>
      </Popup>
    </>
  );
};

export { New_modal };
