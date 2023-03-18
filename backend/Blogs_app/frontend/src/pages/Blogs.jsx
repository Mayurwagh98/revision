import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./Blogs.css";
import { Button, Tooltip } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { NewModal } from "../components/NewModal";
// import {getDataAction} from "../Redux/action"
import { useDispatch, useSelector } from "react-redux";

const Blogs = ({ search }) => {
  let [blogs, setBlogs] = useState();

  // let { token, isLoading } = useSelector((store) => store);
  // let {blogs} = useSelector((store) => store)
  // console.log(blogs)
  // console.log(token);

  let cookieToken = Cookies.get("token");
  let cookieUser = Cookies.get("user");
  let navigate = useNavigate();
  let dispatch = useDispatch();

  // let ls = localStorage.getItem("token")

  let getBlogs = async () => {
    let config = {
      headers: {
        authorization: `Bearer ${cookieToken}`,
      },
    };

    await axios
      // .get("https://elk-top-coat.cyclic.app/api/blogs", config)

      .get(
        search
          ? `http://localhost:8000/api/blogs?title=${search}`
          : "http://localhost:8000/api/blogs",
        config
      )

      .then((res) => {
        console.log(res.data);
        setBlogs(res.data);
      })
      .catch((e) => console.log(e.response?.data.message || e.message));
  };

  useEffect(() => {
    // dispatch(getDataAction)
    getBlogs();
  }, [search]);

  let handleDelete = async (item) => {
    try {
      let config = {
        headers: {
          authorization: `Bearer ${cookieToken}`,
        },
      };

      await axios.delete(
        `http://localhost:8000/api/blogs/delete/${item._id}`,
        config
      );

      // console.log(data)
      getBlogs();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="heading_create_blog">
        <h1>Blogs</h1>
        <Tooltip title="Post Blog" color="red">
          <PostAddIcon
            onClick={() => navigate("/blogs/createblogs")}
            style={{ fontSize: "50px", paddingTop: "10px" }}
          />
        </Tooltip>
      </div>
      <div className="main_blogs_div">
        {blogs?.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => navigate(`/blogs/details/${item.title}`)}
            >
              <img src={item.image} alt="image" />
              <h2>Title:- {item.title}</h2>
              <p>Content:- {item.blog_content}</p>
              {item.category.map((el, index) => (
                <p key={index}>Category:- {el}</p>
              ))}
              <div className="edit_delete_div">
                {cookieUser == item.userID ? (
                  <NewModal item={item} getBlogs={getBlogs} />
                ) : null}
                {cookieUser == item.userID ? (
                  <Tooltip title="Delete" color="blue">
                    <Button
                      type="primary"
                      danger
                      onClick={() => handleDelete(item)}
                    >
                      <DeleteFilled />
                    </Button>
                  </Tooltip>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Blogs };
