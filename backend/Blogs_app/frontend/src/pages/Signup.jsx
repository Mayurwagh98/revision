import React, { useState } from "react";
import axios from "axios"

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
      .post("http://localhost:8000/api/signup", signupData)
      .then((res) => {
        console.log(res.data);
        alert(res.data.message)
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={(e) => e.preventDefault()}>
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
        <input type="submit" value="Register" onClick={signupUser}/>
      </form>
    </div>
  );
};

export { Signup };
