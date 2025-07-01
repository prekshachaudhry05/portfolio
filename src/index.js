import React from "react";
import ReactDOM from "react-dom/client";  // ✅ Updated import
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// ✅ Create root using React 18's API
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance reporting (optional)
reportWebVitals();
