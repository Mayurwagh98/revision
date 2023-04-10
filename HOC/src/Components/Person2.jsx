import React from "react";
import { HOC } from "./HOC";

let Person2 = ({ money, handleInc }) => {
  return (
    <div>
      <h3>John is offering ${money}</h3>
      <button onClick={handleInc}>Increase Money</button>
    </div>
  );
};

export default HOC(Person2);
