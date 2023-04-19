import React from "react";
import { Routes, Route } from "react-router-dom";
import { Playzone } from "../pages/Playzone";
import { Home } from "../pages/Home";
import { Users } from "../pages/Users";

let AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/playzone" element={<Playzone />} />
    </Routes>
  );
};

export { AllRoutes };
