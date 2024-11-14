// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // Temporarily remove StrictMode to avoid unexpected behaviors during development
    // <React.StrictMode><App /></React.StrictMode>,
    <App />
);

reportWebVitals();
