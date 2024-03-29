import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  let [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  let handleForm = (event) => {
    let { name, value } = event.target;

    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  let signupUser = async () => {
    await axios
      .post("https://elk-top-coat.cyclic.app/api/signup", signupData)
      .then((res) => {
        // console.log(res.data);
        alert(res.data.message);
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} className="signup_form">
        <h1>Signup</h1>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={signupData.name}
          onChange={handleForm}
        />
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          value={signupData.email}
          onChange={handleForm}
        />
        <input
          type="text"
          placeholder="Enter your password"
          name="password"
          value={signupData.password}
          onChange={handleForm}
        />
        <input
          type="submit"
          value="Register"
          onClick={signupUser}
          className="submit_input"
          style={{
            backgroundColor: "#5D9C59",
            color: "white",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        />
        <div>
          Already have an account?{" "}
          <Link to="/login" className="login_link">
            <span>Login</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export { Signup };
