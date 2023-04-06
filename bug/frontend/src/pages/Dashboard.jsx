import React from "react";
import { useSelector } from "react-redux";
import { AddBugs } from "../components/AddBugs";

const Dashboard = () => {
  return (
    <div>
      <h1>Dasboard</h1>

      <AddBugs id={"critical"} />
      <AddBugs id={"major"} />
      <AddBugs id={"medium"} />
      <AddBugs id={"low"} />
    </div>
  );
};

export { Dashboard };
