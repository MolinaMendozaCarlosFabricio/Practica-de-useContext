import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
/*
//Importar creacion de contexto
import { createContext } from 'react';
//Creacion del contexto
const ThemeContext = createContext('light');
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
