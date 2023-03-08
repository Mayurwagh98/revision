import React from "react";
import "./New_modal.css";

const New_modal = (props) => {
  return (
    <>
      <div className="popup" id="popup-1">
        <div className="overlay"></div>
        <div className="content">
          <div className="close-btn" onClick={props.togglePopup}>
            &times;
          </div>
          <p className="userId"></p>
          <p className="title"></p>
          <p className="note"></p>
          <p className="category"></p>
        </div>
      </div>
    </>
  );
};

export { New_modal };
