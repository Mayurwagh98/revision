import React, { useState } from "react";
import axios from "axios"

const Signup = () => {
  let [signup, setSignup] = useState({
    email: "",
    password: "",
  });

  let signupUser = async () => {
    await axios
      .post("http://localhost:8080/api/signup", signup)
      .then((res) => {
        // console.log(res.data);
        setSignup(res.data)
      })
      .catch((e) => console.log(e.message));
  };

  let handleSubmit = (event) => {
    let { name, value } = event.target;

    setSignup({
      ...signup,
      [name]: value,
    });

    // console.log(signup);
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="email"
          name="email"
          value={signup.email}
          onChange={handleSubmit}
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          value={signup.password}
          onChange={handleSubmit}
        />
        <input type="submit" value="submit" onClick={signupUser} />
      </form>
    </div>
  );
};

export { Signup };
