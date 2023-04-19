import React, { useEffect, useState } from "react";

const Users = () => {
  let [users, setUsers] = useState([]);

  let getUsers = async () => {
    axios
      .get("http://localhost:8080/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
    </div>
  );
};

export { Users };
