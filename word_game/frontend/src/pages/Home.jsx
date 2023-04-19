import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let [user, setUser] = useState({
    name: "",
    difficulty: "easy",
  });
  let navigate = useNavigate();

  let handleSubmit = async () => {
    axios
      .post("http://localhost:8080/api/users/create", user)
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
        navigate("/playzone");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <h1>home</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter your name"
          value={user.name}
          onChange={(e) => setUser(e.target.value)}
        />
        <select name="difficulty" onChange={(e) => setUser(e.target.value)}>
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
