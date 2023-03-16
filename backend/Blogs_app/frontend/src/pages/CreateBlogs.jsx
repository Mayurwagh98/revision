import Cookies from "js-cookie";
import React, { useState } from "react";
import axios from "axios";

const CreateBlogs = () => {
  let [text, setText] = useState({
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
      }
    };

    await axios
      .post("https://elk-top-coat.cyclic.app/api/blogs/create", text, config)
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e.message));
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
      <h1>Create Blogs</h1>
      <form onSubmit={(e) => e.preventDefault()}>
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
        <input type="submit" value="Post blog" onClick={handleCreate} />
      </form>
    </div>
  );
};

export { CreateBlogs };
