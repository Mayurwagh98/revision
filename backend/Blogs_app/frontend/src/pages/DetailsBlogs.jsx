import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const DetailsBlogs = () => {
  let { title } = useParams();

  let [detailedBlog, setDetailedBlog] = useState();

  let cookieToken = Cookies.get("token");

  let getDetailedBlog = async () => {
    let config = {
      headers: {
        authorization: `Bearer ${cookieToken}`,
      },
    };
    await axios
      .get(`http://localhost:8000/api/blogs/${title}`, config)
      .then((res) => {
        // console.log(res.data);
        setDetailedBlog(res.data);
      })
      .catch((e) => console.log(e.response?.data.message || e.message));
  };

  useEffect(() => {
    getDetailedBlog();
  }, []);

  return (
    <div>
      <h1>Details</h1>
      <div>
        <img src={detailedBlog?.image} alt="image" />
        <h2>Title:- {detailedBlog?.title}</h2>
        <p>Content{detailedBlog?.blog_content}</p>
        {detailedBlog?.category.map((el, index) => (
          <p key={index}>Category:- {el}</p>
        ))}
      </div>
    </div>
  );
};

export { DetailsBlogs };
