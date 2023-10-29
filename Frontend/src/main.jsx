import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter  } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
   <Auth0Provider
    domain="dev-y2u1x7z2dud70km5.us.auth0.com"
    clientId="7T2WT00xHotXuBzZSZeGmDVT76RGjUjo"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <React.StrictMode>
<BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
  </Auth0Provider>
)
