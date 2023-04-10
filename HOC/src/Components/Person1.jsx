import React from "react";
import {HOC} from "./HOC";

let Person1 = ({ money, handleInc }) => {
  return (
    <div>
      <h3>Jimmy is offering ${money}</h3>
      <button onClick={handleInc}>Increase Money</button>
    </div>
  );
};

export default HOC(Person1);
