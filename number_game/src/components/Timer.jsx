import React, { useEffect, useState } from "react";

const Timer = ({ difficulty }) => {
  let [counter, setCounter] = useState(0);

  useEffect(() => {
    if (difficulty) {
      if (difficulty == "easy") {
        setCounter(60);
        setInterval(() => {
          setCounter((prev) => prev - 1);
        }, 1000);
      } else if (difficulty == "medium") {
        setCounter(40);
        setInterval(() => {
          setCounter((prev) => prev - 1);
        }, 1000);
      } else if (difficulty == "hard") {
        setCounter(30);
        setInterval(() => {
          setCounter((prev) => prev - 1);
        }, 1000);
      }
    }
  }, []);

  return (
    <div>
      <h1>Timer:- {counter}</h1>
    </div>
  );
};

export { Timer };
