import React from "react";
import ReactDom from "react-dom";

import "skeleton-css/css/normalize.css";
import "skeleton-css/css/skeleton.css";
import "font-awesome/css/font-awesome.min.css";
import "./styles.scss";

import App from "./App";

ReactDom.render(<App />, document.querySelector("#root"));

module.hot.accept();
