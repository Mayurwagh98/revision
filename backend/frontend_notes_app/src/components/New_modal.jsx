import React from "react";
import "./New_modal.css";

const New_modal = ({ togglePopup, item }) => {
 
  return (
    <>
      <div className="popup" id="popup-1">
        <div className="overlay"></div>
        <div className="content">
          <div className="close-btn" onClick={togglePopup}>
            &times;
          </div>
          <p className="userId">UserID:- {item.userID}</p>
          <p className="title">Title:- {item.title}</p>
          <p className="note">Note:- {item.note}</p>
          {/* <p className="category"></p> */}
        </div>
      </div>
    </>
  );
};

export { New_modal };
