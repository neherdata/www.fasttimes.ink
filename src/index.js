import React from "react";
import { createRoot } from "react-dom/client";
import App from "./Components/App";
import { HashRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

const root = createRoot(document.querySelector("#root"));

root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
