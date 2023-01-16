import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";

let Login = () => {
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <h1>Login</h1>

      {isAuthenticated && <h1>{user.name}</h1>}
      {isAuthenticated ? (
        <Button
          variant="contained"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Log Out
        </Button>
      ) : (
        <Button variant="contained" onClick={() => loginWithRedirect()}>
          Log In
        </Button>
      )}
    </>
  );
};

export { Login };
