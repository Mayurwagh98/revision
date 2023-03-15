import React, { useState } from "react";
import { loginUserAction } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  let [loginUserData, setLoginUserData] = useState({
    email: "",
    password: "",
  });
  let dispatch = useDispatch();
  let navigate = useNavigate();
  // let token = useSelector((store) => store);
  // console.log(token);

  // let loginUser = async () => {
  //   await axios
  //     .post("http://localhost:8000/api/login", loginUserData)
  //     .then((res) => {
  //       dispatch(getUser(res.data.token));
  //       // console.log(res.data.token);
  //       // localStorage.setItem("token", (res.data.token))
  //     })
  //     .catch((e) => {
  //       console.log(e.message);
  //     });
  // };
  let loginUser = () => {
    dispatch(loginUserAction(loginUserData));
    setTimeout(() => {
      navigate("/blogs");
    }, 1500);
  };

  let handleLogin = (event) => {
    let { name, value } = event.target;

    setLoginUserData({
      ...loginUserData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          value={loginUserData.email}
          onChange={handleLogin}
        />
        <input
          type="text"
          placeholder="Enter your password"
          name="password"
          value={loginUserData.password}
          onChange={handleLogin}
        />
        <input type="submit" value="Login" onClick={loginUser} />
      </form>
    </div>
  );
};

export { Login };
