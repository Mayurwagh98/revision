import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


const Blogs = () => {
  let [blogs, setBlogs] = useState([]);
  // let { token, isLoading } = useSelector((store) => store);
  // console.log(token);
  let cookieToken = Cookies.get("token")
  let navigate = useNavigate()
 

  let getBlogs = async () => {
    let config = {
      headers: {
        authorization: `Bearer ${cookieToken}`,
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
      <button onClick={() => navigate('/createblogs')}>Create Blogs</button>
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
