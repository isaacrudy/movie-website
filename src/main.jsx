import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/normalize.css";
import "./styles/index.css";
import AppRouter from "./router/AppRouter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
