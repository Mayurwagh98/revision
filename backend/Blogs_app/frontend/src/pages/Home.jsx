import React, { useState } from "react";
import { Blogs } from "./Blogs";

const Home = () => {
  let [search, setSearch] = useState("");

  return (
    <div>
      <h1>Home</h1>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      {search ? <Blogs search={search} /> : null}
    </div>
  );
};

export { Home };
