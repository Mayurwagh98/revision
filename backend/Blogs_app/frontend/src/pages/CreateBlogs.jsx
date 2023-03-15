import Cookies from "js-cookie";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const CreateBlogs = () => {
  let [text, setText] = useState({
    title: "",
    blog_content: "",
    category: [],
  });
  let cookieToken = Cookies.get("token");
  // console.log(cookieToken)

  let handleChange = () => {};

  return (
    <div>
      <h1>Create Blogs</h1>
      <form>
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
        <input type="submit" value="Post blog" />
      </form>
    </div>
  );
};

export { CreateBlogs };
