import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-7qg8ax7i1o0mufu4.us.auth0.com"
    clientId="Ul47NCI86CMn2PYY4bSAtM7kv7g8PXc6"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
