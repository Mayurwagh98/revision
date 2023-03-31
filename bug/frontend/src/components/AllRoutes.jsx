import React from "react";
import { Dashboard } from "../pages/Dashboard";
import { Signup } from "../pages/Signup";
import { Signin } from "../pages/Signin";
import { Routes, Route } from "react-router-dom";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
};

export { AllRoutes };
