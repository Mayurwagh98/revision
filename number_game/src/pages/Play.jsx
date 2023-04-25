import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/action";

const Play = () => {
  let { users } = useSelector((store) => store);
  // console.log(users);
  // let dispatch = useDispatch();

  let number;
  if (users) {
    if (users.difficulty == "easy") {
      number = 5;
    } else if (users.difficulty == "medium") {
      number = 7;
    } else if (users.difficulty == "hard") {
      number = 10;
    }
  }
  // create an array of 5 random numbers between 0 and 1
  let randomNumbers = Array.from(
    { length: number },
    () => Math.round(Math.random() * 100) + " "
  );
  console.log(randomNumbers);

  // create an array of 7 random numbers between 1 and 100
  // let randomNumbers2 = new Array(7).fill().map(() => Math.floor(Math.random() * 100) + 1);
  // console.log(randomNumbers2);

  // useEffect(() => {
  //   dispatch(getUsers);
  // }, []);

  return (
    <div>
      <h2>Play</h2>
      <div>{randomNumbers}</div>
    </div>
  );
};

export { Play };
