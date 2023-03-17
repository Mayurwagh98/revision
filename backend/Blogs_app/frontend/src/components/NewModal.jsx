import { Button, Modal, Tooltip, Input } from "antd";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { EditFilled } from "@ant-design/icons";
import "./NewModal.css";

const NewModal = ({ item, getBlogs }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let [updateText, setUpdateText] = useState({
    image: "",
    title: "",
    blog_content: "",
    category: [],
  });

  let cookieToken = Cookies.get("token");
  const { TextArea } = Input;
  let updateBlog = async () => {
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
        // setUpdateText(res.data)
        getBlogs()
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
    setUpdateText(item);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    updateBlog();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Tooltip title="Edit the blog" color="red">
        <Button type="primary" onClick={showModal}>
          <EditFilled />
        </Button>
      </Tooltip>
      <Modal
        title="Update the blog"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form onSubmit={(e) => e.preventDefault()} className="edit_form">
          <Input
            type="text"
            placeholder="image"
            name="image"
            value={updateText.image}
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="title"
            name="title"
            value={updateText.title}
            onChange={handleChange}
          />

          <TextArea
            type="text"
            rows={4}
            style={{ backgroundColor: "#f1eaea" }}
            placeholder="blog_content"
            name="blog_content"
            value={updateText.blog_content}
            onChange={handleChange}
          />
          <Input
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
