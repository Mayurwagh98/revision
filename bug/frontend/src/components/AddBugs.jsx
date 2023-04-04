import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Input, Modal } from "antd";

const AddBugs = () => {
  let { critical_severity } = useSelector((store) => store);
  console.log(critical_severity);
  
  let [bug, setBug] = useState("");


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


  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Tasks
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
    </>
  );
};

export { AddBugs };
