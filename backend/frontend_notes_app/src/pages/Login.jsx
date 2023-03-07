import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  let [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  let submitLogin = async () => {
    await axios
      .post("http://localhost:8080/api/login", loginData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => console.log(e.message));
  };

  let handleLogin = (event) => {
    let { name, value } = event.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="email"
          onChange={handleLogin}
          name="email"
          value={loginData.email}
        />
        <input
          type="text"
          placeholder="password"
          onChange={handleLogin}
          name="password"
          value={loginData.password}
        />
        <input type="submit" value="submit" onClick={submitLogin} />
      </form>
    </div>
  );
};

export { Login };
