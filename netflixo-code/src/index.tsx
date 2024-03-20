import React from 'react';
import ReactDOM from 'react-dom';
import './main.css'; // Importe o arquivo CSS aqui
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <h1 className="text-3xl font-bold underline text-green-600">
      Hello world!
    </h1>
  </React.StrictMode>,
  document.getElementById('root')
);
