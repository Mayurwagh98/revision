import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { token } = useSelector((state) => state);
  // console.log(token)
  if (!token) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export { PrivateRoute };
