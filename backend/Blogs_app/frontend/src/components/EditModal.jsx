import React, { useState } from "react";
import "./EditModal.css";
import axios from "axios";
import Cookies from "js-cookie";

const EditModal = ({ item }) => {
  let [updateText, setUpdateText] = useState({
    title: "",
    blog_content: "",
    category: [],
  });

  let cookieToken = Cookies.get("token");

  let updateNote = async () => {
    let config = {
      headers: {
        authorization: `Bearer ${cookieToken}`,
      },
    };

    await axios
      .patch(
        `http://localhost:8000/api/blogs/update/${item._id}`,
        updateText,
        config
      )
      .then((res) => {
        // console.log(res.data);
        alert(res.data.message);
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
    setUpdateText(item);
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  
  return (
    <div className="popup">
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
            placeholder="blog_content"
            name="blog_content"
            value={updateText.blog_content}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="category"
            name="category"
            value={updateText.category}
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

export { EditModal };
