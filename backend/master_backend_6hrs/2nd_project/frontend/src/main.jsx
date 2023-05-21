import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/app.scss";
import { BrowserRouter } from "react-router-dom";

// export const serverUrl = "http://localhost:5000/api/users";
export const serverUrl =
  "https://todo-fullstack-backend-06ao.onrender.com/api/users";

export const TasksUrl = "https://todo-fullstack-backend-06ao.onrender.com/api/tasks"

export const Context = createContext({ isAuthenticated: false });

const ContextWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        loading,
        setLoading,
        user,
        setUser,
      }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextWrapper />
  </BrowserRouter>
);
