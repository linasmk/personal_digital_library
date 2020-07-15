/* ===== App Dependencies ===== */
import React from "react";
import ReactDOM from "react-dom";

/* =========== Redux ================== */
import { Provider } from "react-redux";
import store from "./store/configureStore";
/* =========== Router ================== */
import AppRouter from "./routers/AppRouter";
/* ===== Styles and Components ===== */
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const appRoot = document.querySelector("#app");
ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  appRoot
);
