import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/action";

const Play = () => {
  let { users } = useSelector((store) => store);
  console.log(users);

  let dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUsers);
  // }, []);

  return (
    <div>
      <h2>Play</h2>
    </div>
  );
};

export { Play };
