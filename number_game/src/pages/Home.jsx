import React, { useState } from "react";

const Home = () => {
  let [registerUser, setRegisterUser] = useState({
    name: "",
    difficulty: "easy",
  });

  let handleRegister = (e) => {
    let { name, value } = e.target;

    setRegisterUser({
      ...registerUser,
      [name]: value,
    });
  };

  let handleSubmit = () => {
    console.log(registerUser);
  };

  return (
    <div>
      <h2>home</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="enter your name"
          name="name"
          value={registerUser.name}
          onChange={handleRegister}
        />
        <select
          name="difficulty"
          value={registerUser.difficulty}
          onChange={handleRegister}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export { Home };
