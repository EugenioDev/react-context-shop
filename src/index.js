import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import router from "../src/Routes/Router";
import Navbar from "./components/Navbar";
import { StoreContextProvider } from "./StoreContext/StoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <StoreContextProvider>
      <RouterProvider router={router} />
    </StoreContextProvider>

    {/* <App /> */}
  </React.StrictMode>
);
