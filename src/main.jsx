import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./Context/UserContext.jsx";
import ProductContext from "./Context/ProductContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserContext>
      <ProductContext>
        <ToastContainer/>
        <App />
      </ProductContext>
    </UserContext>
  </BrowserRouter>
);
