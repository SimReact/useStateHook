import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

let count = 0;

function increase() {}

ReactDOM.render(
  <div className="container">
    <h1>{count}</h1>
    <button>+</button>
  </div>,
  document.getElementById("root")
);
