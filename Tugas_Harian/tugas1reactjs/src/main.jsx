import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Team from "./Team.jsx";  // pastikan nama file sama persis
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Team />
  </StrictMode>
);
