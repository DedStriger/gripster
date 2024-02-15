import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import CoreContextProvider from "./Core/CoreProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <CoreContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CoreContextProvider>,
);
