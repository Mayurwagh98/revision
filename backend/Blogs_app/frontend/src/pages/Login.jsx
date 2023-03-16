import React, { useState } from "react";
import { loginUserAction } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  let [loginUserData, setLoginUserData] = useState({
    email: "",
    password: "",
  });
  let dispatch = useDispatch();
  let navigate = useNavigate();
  // let token = useSelector((store) => store);
  // console.log(token);

  let loginUser = () => {
    dispatch(loginUserAction(loginUserData));
    setTimeout(() => {
      navigate("/blogs");
    }, 1300);
    // alert("Login Successful!");
    // navigate("/blogs")
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
      <form onSubmit={(e) => e.preventDefault()} className="login_form">
        <h1>Login</h1>
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
        <input
          type="submit"
          value="Login"
          onClick={loginUser}
          className="submit_input"
          style={{
            backgroundColor: "#5D9C59",
            color: "white",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        />
        <div>
          Don't have an account?{" "}
          <Link to="/signup" className="login_link">
            <span>Register</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export { Login };
