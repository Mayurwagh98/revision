import React, { useEffect, useState } from "react";

const Timer = ({ difficulty }) => {
  let [counter, setCounter] = useState(0);

  useEffect(() => {
    let id;
    if (difficulty) {
      if (difficulty == "easy") {
        setCounter(60);
        id = setInterval(() => {
          setCounter((prev) => prev - 1);
        }, 1000);
        setTimeout(() => {
          clearInterval(id);
        }, 60000);
      } else if (difficulty == "medium") {
        setCounter(40);
        id = setInterval(() => {
          setCounter((prev) => prev - 1);
        }, 1000);
        setTimeout(() => {
          clearInterval(id);
        }, 40000);
      } else if (difficulty == "hard") {
        setCounter(30);
        id = setInterval(() => {
          setCounter((prev) => prev - 1);
        }, 1000);

        setTimeout(() => {
          clearInterval(id);
        }, 30000);
      } else {
        setCounter(0);
      }
    }
  }, []);

  let handleFinish = () => {
    if (counter !== 0) {
      console.log("you won");
    } else if (counter == 0) {
      console.log("you lose");
    }
  };
  return (
    <div>
      <h1>Timer:- {counter}</h1>
      <button onClick={handleFinish}>Finish</button>
    </div>
  );
};

export { Timer };
