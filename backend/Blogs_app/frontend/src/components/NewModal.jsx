import { Button, Modal } from "antd";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const NewModal = ({item}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        console.log(res.data);
        // alert(res.data.message);
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
  const showModal = () => {
    setUpdateText(item)
    setIsModalOpen(true);
};
const handleOk = () => {
    setIsModalOpen(false);
    updateNote();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Edit
      </Button>
      <Modal
        title="Update the blog"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
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
        </form>
      </Modal>
    </>
  );
};
export { NewModal };
