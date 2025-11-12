import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProductCountProvider } from "./components/ProductCountProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductCountProvider>
      <App />
    </ProductCountProvider>
  </StrictMode>
);
