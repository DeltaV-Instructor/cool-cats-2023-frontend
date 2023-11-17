// import React from 'reactd';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-818my7zr.us.auth0.com"
    clientId="v5nxGFoD9Evpft9cTfZxOdTl5ur5Eu5h"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);