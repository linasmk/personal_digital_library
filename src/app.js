import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
// Components
import PersonalDigitalLibraryApp from "./components/PersonalDigitalLibraryApp";

const appRoot = document.querySelector("#app");
ReactDOM.render(<PersonalDigitalLibraryApp />, appRoot);
