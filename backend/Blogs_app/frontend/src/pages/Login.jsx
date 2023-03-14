import React, { useState } from "react";
import { loginUserAction } from "../Redux/action";
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"

const Login = () => {
  let [loginUserData, setLoginUserData] = useState({
    email: "",
    password: "",
  });
  let dispatch = useDispatch()
  // let navigate = useNavigate()
  let handleLogin = (event) => {
    let { name, value } = event.target;

    setLoginUserData({
      ...loginUserData,
      [name]: value,
    });
  };

  let loginUser = () => {
   dispatch(loginUserAction(loginUserData))
  //  navigate("/blogs")
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
