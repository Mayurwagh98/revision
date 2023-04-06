import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input, Modal } from "antd";
import { major, critical, medium, low } from "../Redux/bug/action";
import "./AddBugs.css";

const AddBugs = ({ id }) => {
  let { major_severity, critical_severity, medium_severity, low_severity } =
    useSelector((store) => store.bugReducer);
  console.log(critical_severity, major_severity, medium_severity, low_severity);

  let [bug, setBug] = useState("");
  let dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  let handleBug = () => {
    if (id == "critical") {
      dispatch(critical(bug));
    } else if (id == "major") {
      dispatch(major(bug));
    } else if (id == "medium") {
      dispatch(medium(bug));
    } else {
      dispatch(low(bug));
    }
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {id}
      </Button>
      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form onSubmit={(e) => e.preventDefault()} className="create_form">
          <Input
            type="text"
            placeholder="Enter tasks"
            onChange={(e) => setBug(e.target.value)}
          />

          <Input
            type="submit"
            value="Add Tasks"
            className="create_input"
            onClick={handleBug}
            style={{
              border: "none",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
              color: "white",
              backgroundColor: "#2B3467",
            }}
          />
        </form>
      </Modal>

      {/* ------------- critical mapped ---------------- */}
      {id == "critical"
        ? critical_severity?.map((item, index) => {
            return (
              <div key={index} className="critical_div">
                {item}
              </div>
            );
          })
        : null}

      {/* ------------- major mapped ---------------- */}
      {id == "major"
        ? major_severity?.map((item, index) => {
            return (
              <div key={index} className="major_div">
                {item}
              </div>
            );
          })
        : null}

      {/* ------------- medium mapped ---------------- */}
      {id == "medium"
        ? medium_severity?.map((item, index) => {
            return (
              <div key={index} className="medium_div">
                {item}
              </div>
            );
          })
        : null}

      {/* ------------- low mapped ---------------- */}
      {id == "low"
        ? low_severity?.map((item, index) => {
            return (
              <div key={index} className="low_div">
                {item}
              </div>
            );
          })
        : null}
    </>
  );
};

export { AddBugs };
