import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-ybh302xorvllwlkr.us.auth0.com"
      clientId="mRAZ6cyOCfrDeJDG8b6JkLvk0q1F3KxU"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>
);

// <Auth0Provider
//   domain="dev-ybh302xorvllwlkr.us.auth0.com"
//   clientId="mRAZ6cyOCfrDeJDG8b6JkLvk0q1F3KxU"
//   authorizationParams={{
//     redirect_uri: window.location.origin,
//   }}
//</Auth0Provider>

// >
