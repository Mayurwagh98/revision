import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Blogs = () => {
  let { token, isLoading } = useSelector((store) => store);
  console.log(token);

  let [blogs, setBlogs] = useState([]);

  let ls = localStorage.getItem("token");
  // console.log(ls);

  let getBlogs = async () => {
    let config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    await axios
      .get("http://localhost:8000/api/blogs", config)
      .then((res) => {
        console.log(res.data);
        setBlogs(res.data);
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div>
      <h1>Blogs</h1>
      <div className="main_blogs_div">
        {blogs &&
          blogs.map((item, index) => {
            return (
              <div key={index}>
                <h2>Title:- {item.title}</h2>
                <p>Content:- {item.blog_content}</p>
                {item.category.map((el, index) => (
                  <p key={index}>Category:- {el}</p>
                ))}
                <button>Edit</button>
                <button>Delete</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export { Blogs };
