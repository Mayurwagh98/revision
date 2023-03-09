import React, { useState } from "react";
import "./New_modal.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import axios from "axios"

const New_modal = ({item}) => {
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
      .patch(`http://localhost:8080/api/notes/update/${item._id}`, updateText, config)
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

      {/* <div className="popup" id="popup-1">
        <div className="overlay"></div>
        <div className="content">
          <div className="close-btn" onClick={togglePopup}>
            &times;
          </div>
          <p className="userId">UserID:- {item.userID}</p>
          <p className="title">Title:- {item.title}</p>
          <p className="note">Note:- {item.note}</p>
          <p className="category"></p>
        </div>
      </div> */}
    </>
  );
};

export { New_modal };
