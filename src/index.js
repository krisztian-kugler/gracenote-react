import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import App from "./components/App/App";
import "./fontawesome";

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector("#root")
);
