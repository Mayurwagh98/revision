import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";

const Home = () => {
  let { loading, setLoading } = useContext(Context);

  
  return loading ? (
    <Loader />
  ) : (
    <div>
      <h1>home</h1>
    </div>
  );
};

export default Home;
