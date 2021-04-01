import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import dotenv from 'dotenv';
import './index.css';
dotenv.config();
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = 'zApgQphfDL4e57kVwNZuuL57yGR1lfX6';

ReactDOM.render( 
<Auth0Provider
  domain={domain as string}
  clientId={clientId as string}
  redirectUri={window.location.origin}>

  <React.StrictMode>
      <App />
  </React.StrictMode>
  </Auth0Provider>
  ,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
