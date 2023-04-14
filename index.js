import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/Components/App";
import { HashRouter } from "react-router-dom";
import store from "./src/store";
import { Provider } from "react-redux";

const root = createRoot(document.querySelector("#root"));

root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
