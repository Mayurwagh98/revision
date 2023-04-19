import React, { useEffect, useState } from "react";
import axios from "axios";
import { Keyboard } from "../components/Keyboard";

const Playzone = () => {
  let [words, setWords] = useState([]);

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

  let randomIndex = Math.floor(Math.random() * words.length);

  return (
    <div>
      <h1>{words[randomIndex]}</h1>

      <Keyboard />
    </div>
  );
};

export { Playzone };
