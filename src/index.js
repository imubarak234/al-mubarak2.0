import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// CSS Files
// Bootstrap CSS
import './assets/plugins/bootstrap/css/bootstrap.min.css';

import './assets/plugins/fontawesome/css/fontawesome.min.css';
import './assets/plugins/fontawesome/css/all.min.css';

import './assets/plugins/simple-calendar/simple-calendar.css';
import './assets/plugins/simple-calendar/jquery.simple-calendar.js';

// Custom CSS
import './assets/css/style.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
