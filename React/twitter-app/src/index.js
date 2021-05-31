import React from 'react';  // We are importing react to work with it
import ReactDOM from 'react-dom'; // react-dom to work with DOM
import './index.css';
import App from './components/app/';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);