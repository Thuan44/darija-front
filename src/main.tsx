import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { isApiConfigured } from "./api/config";
import { ConfigError } from "./components/ConfigError";
import { ErrorBoundary } from "./components/ErrorBoundary";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      {isApiConfigured() ? <App /> : <ConfigError />}
    </ErrorBoundary>
  </StrictMode>,
);
