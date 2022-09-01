import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); //DOM Virtual donde se crean los componentes
root.render(
  <React.StrictMode>
    <App /> // componente donde se renderiza el html 
  </React.StrictMode>
);
