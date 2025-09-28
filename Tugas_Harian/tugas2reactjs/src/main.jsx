import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";  // pastikan nama file sama persis
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
