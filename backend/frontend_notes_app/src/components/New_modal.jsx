import React, { useState } from "react";
import "./New_modal.css";
import axios from "axios";

const FormModal = ({ item }) => {
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

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  return (
    <div>
      <button className="open-button" onClick={openForm}>
        Edit
      </button>
      <div className="form-popup" id="myForm">
        <form className="form-container" onSubmit={(e) => e.preventDefault()}>
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

          <button type="submit" className="btn" onClick={updateNote}>
            Update Note
          </button>
          <button type="button" className="btn cancel" onClick={closeForm}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export { FormModal };
