import React, { useState } from "react";
import { login } from "../Redux/login/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";

const Signin = () => {
  let [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  let handleLogin = (event) => {
    let { name, value } = event.target;

    setLoginUser({
      ...loginUser,
      [name]: value,
    });
  };

  let dispatch = useDispatch();
  let navigate = useNavigate();

  let loginUserSubmit = () => {
    dispatch(login(loginUser));
    setTimeout(() => {
      navigate("/");
    }, 1200);
  };

  return (
    <div>
      <h1>Signin</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter email"
          name="email"
          value={loginUser.email}
          onChange={handleLogin}
        />
        <input
          type="text"
          placeholder="Enter password"
          name="password"
          value={loginUser.password}
          onChange={handleLogin}
        />
        <input type="submit" value="login" onClick={loginUserSubmit} />
      </form>
    </div>
  );
};

export { Signin };
