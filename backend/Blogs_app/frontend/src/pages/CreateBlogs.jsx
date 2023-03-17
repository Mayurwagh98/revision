import Cookies from "js-cookie";
import React, { useState } from "react";
import axios from "axios";
import "./CreateBlogs.css";

const CreateBlogs = () => {
  let [text, setText] = useState({
    image: "",
    title: "",
    blog_content: "",
    category: [],
  });
  let cookieToken = Cookies.get("token");
  // console.log(cookieToken)

  let handleCreate = async () => {
    let config = {
      headers: {
        authorization: `Bearer ${cookieToken}`,
      },
    };

    await axios
      .post("http://localhost:8000/api/blogs/create", text, config)
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e.response?.data.message || e.message));
  };

  let handleChange = (event) => {
    let { name, value } = event.target;
    setText({
      ...text,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} className="create_form">
        <h1>Post Your Blog</h1>
        <input
          type="text"
          placeholder="Enter image for your blog"
          name="image"
          value={text.image}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter title of blog"
          name="title"
          value={text.title}
          onChange={handleChange}
        />
        <textarea
          type="text"
          cols="30"
          rows="10"
          placeholder="Enter description of blog"
          name="blog_content"
          value={text.blog_content}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter category of a blog"
          name="category"
          value={text.category}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Post blog"
          onClick={handleCreate}
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
    </div>
  );
};

export { CreateBlogs };
