import React from "react";
import ReactDom from "react-dom";

import "skeleton-css/css/normalize.css";
import "skeleton-css/css/skeleton.css";
import "font-awesome/css/font-awesome.min.css";
import "./styles.css";

const title = "Hooray";
const root = document.querySelector("#root");

ReactDom.render(<h1>{title}</h1>, root);
