import React, { useEffect, useState } from "react";
import axios from "axios";
import { Keyboard } from "../components/Keyboard";

const Playzone = () => {
  let [words, setWords] = useState([]);
  let randomIndex = Math.floor(Math.random() * words.length);
  let randomWord = words[randomIndex];
  let [childData, setChildData] = useState("");
  let [points, setPoints] = useState(0);
  let user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  let getWords = async () => {
    axios
      .get("http://localhost:8080/api/words")
      .then((res) => {
        console.log(res.data[0].words);
        setWords(res.data[0].words);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getWords();
  }, []);

  let handleChildData = (data) => {
    setChildData(data); //receving the data from the child component

    if (data === randomWord) {
      // console.log("true");
      setPoints((prev) => prev + data.length);
    } else {
      // console.log(false);
      setPoints((prev) => prev - data.length);
    }
    // setPoints((prev) => prev + data.length);
  };

  let saveResults = async () => {
    await axios
      .post("http://localhost:8080/api/results/create", {
        name: user.name,
        level: user.difficulty,
        scores: points,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      {/* {childData && <p>{childData}</p>} */}
      <button onClick={saveResults}>Save Progress</button>
      <h1>{randomWord}</h1>
      <p>Points:- {points}</p>
      <Keyboard randomWord={randomWord} onChildData={handleChildData} />
    </div>
  );
};

export { Playzone };
