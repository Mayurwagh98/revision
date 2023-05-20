import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import toast from "react-hot-toast";
import { serverUrl, Context } from "../main";

const Register = () => {
  let [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);

  let handleChange = (event) => {
    let { name, value } = event.target;

    setRegisterData({
      ...registerData,
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
      let { data } = await axios.post(
        `${serverUrl}/register`,
        registerData,
        config
      );
      toast.success(data.message);
      setIsAuthenticated(true);
      setLoading(false);
      setRegisterData({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      toast.error(error.response.data.message);
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
            name="name"
            value={registerData.name}
            onChange={handleChange}
            type="text"
            placeholder="Name"
            required
          />
          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            value={registerData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            required
            placeholder="Password"
            name="password"
            value={registerData.password}
            onChange={handleChange}
          />
          <button type="submit">Sign Up</button>
          <h4>Or</h4>
          <Link to="/login">Log In</Link>
        </form>
      </section>
    </div>
  );
};

export default Register;
