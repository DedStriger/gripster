import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./service/reducer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const store = createStore(rootReducer);
export type rootStoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
