import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  let [results, setResults] = useState([]);

  let getResults = async () => {
    await axios
      .get("http://localhost:8080/api/results")
      .then((res) => {
        console.log(res.data);
        setResults(res.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getResults();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      <table style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Level</th>
            <th>Scores</th>
          </tr>
        </thead>
        <tbody>
          {results
            .sort((a, b) => b.scores - a.scores)
            .map((item, index) => {
              return (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.level}</td>
                  <td>{item.scores}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export { Dashboard };
