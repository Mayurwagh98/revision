import React, { useContext, useState } from "react";
import { serverUrl, Context } from "../main";
import toast from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  let [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);

  let handleChange = (event) => {
    let { name, value } = event.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };
      let { data } = await axios.post(`${serverUrl}/login`, loginData, config);
      toast.success(data.message);
      setLoginData({
        email: "",
        password: "",
      });
      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      // console.log(error.message);
      setIsAuthenticated(false);
      setLoading(false);
    }
  };

  if (isAuthenticated) return <Navigate to={"/"} />;

  return (
    <div className="login">
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            required
            placeholder="Password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
          <button type="submit" disabled={loading}>
            Login
          </button>
          <h4>Or</h4>
          <Link to="/register">Sign Up</Link>
        </form>
      </section>
    </div>
  );
};

export default Login;
