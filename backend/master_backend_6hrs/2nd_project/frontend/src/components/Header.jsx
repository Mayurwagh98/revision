import axios from "axios";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Context, serverUrl } from "../main";

const Header = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);

  let logoutHandler = async () => {
    setLoading(true);
    try {
      let { data } = await axios.get(`${serverUrl}/logout`, {
        withCredentials: true,
      });

      toast.success(data.message);
      setIsAuthenticated(false);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setIsAuthenticated(true);
      setLoading(true);
    }
  };

  return (
    <nav className="header">
      <div>
        <h2>Todo App</h2>
      </div>
      <article>
        <Link to={"/"}>Home</Link>
        <Link to={"/profile"}>Profile</Link>
        {isAuthenticated ? (
          <Link onClick={logoutHandler} className="btn">
            Logout
          </Link>
        ) : (
          <Link to={"/login"}>
            Login
          </Link>
        )}
      </article>
    </nav>
  );
};

export default Header;
