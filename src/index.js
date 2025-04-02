import React from "react";
import ReactDOM from "react-dom/client"; // Cambia esto a 'react-dom/client'
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Crea el root con ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si quieres medir el rendimiento en tu app, puedes pasar una función para logear los resultados
reportWebVitals();
