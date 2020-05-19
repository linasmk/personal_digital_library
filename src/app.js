/* ===== App Dependencies ===== */
import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
/* ===== Styles and Components ===== */
import "normalize.css/normalize.css";
import "./styles/styles.scss";




const appRoot = document.querySelector("#app");
ReactDOM.render(<AppRouter />, appRoot);