import React from "react";
import { Routes, Route } from "react-router-dom";
import { Play } from "../pages/Play";
import { Leaderboard } from "../pages/Leaderboard";
import { Home } from "../pages/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/play" element={<Play />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
  );
};

export { AllRoutes };
