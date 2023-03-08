import React, { useEffect, useState } from "react";
import axios from "axios";

const Notes = () => {
  let [notes, setNotes] = useState([]);
  let user = JSON.parse(localStorage.getItem("user"));

  // get
  let getNotes = async () => {
    let config = {
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    };

    await axios
      .get("http://localhost:8080/api/notes", config)
      .then((res) => {
        // console.log(res.data);
        setNotes(res.data);
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    getNotes();
  }, []);

  // delete
  let handleDelete = async (item) => {
    try {
      let config = {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      };

      await axios.delete(
        `http://localhost:8080/api/notes/delete/${item._id}`,
        config
      );
    } catch (error) {
      alert(error.response?.data || error.message);
    }
  };

  // update
  let handleEdit = async (item) => {
    // let { _id } = item;
    await axios
      .patch(`http://localhost:8080/api/update/${item._id}`)
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e.message));
  };

  return (
    <div>
      <h1>Notes</h1>

      {notes?.map((item, index) => {
        return (
          <div key={index}>
            <p>User id:- {item.userID}</p>
            <p>Title:- {item.title}</p>
            <p>Note:- {item.note}</p>

            {item.category.map((el, ind) => (
              <p key={ind}>Category:- {el}</p>
            ))}
            <button onClick={() => handleDelete(item)}>Delete</button>
            {item.userID == user.userID ? <button onClick={() => handleEdit(item)}>Edit</button>: null}
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export { Notes };
