import React, { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";

const Profile = () => {
  const { isAuthenticated, loading, user } = useContext(Context);

  return loading ? (
    <Loader />
  ) : (
    <div
      className="profile"
      style={{
        width: "40%",
        height: "200px",
        margin: "30px auto",
        textAlign: "center",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="profile image"
        style={{ width: "20%", margin: "20px auto", borderRadius: "50%" }}
      />
      <h2>Name:- {user.name}</h2>
      <h2>Email:- {user.email}</h2>
    </div>
  );
};

export default Profile;
