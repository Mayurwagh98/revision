import React, { useEffect, useState } from "react";
import axios from "axios";
import { Keyboard } from "../components/Keyboard";

const Playzone = () => {
  let [words, setWords] = useState([]);
  let randomIndex = Math.floor(Math.random() * words.length);
  let randomWord = words[randomIndex];
  let [childData, setChildData] = useState("");

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
    setChildData(data);
    if (data === randomWord) {
      console.log("true");
    }
  };

  return (
    <div>
      <h1>{randomWord}</h1>
      {childData && <p>{childData}</p>}

      <Keyboard randomWord={randomWord} onChildData={handleChildData} />
    </div>
  );
};

export { Playzone };
