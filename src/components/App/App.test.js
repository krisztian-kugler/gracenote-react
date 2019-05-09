import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

it("renders the NOCMedals component", () => {
  const div = document.createElement("div");

  ReactDOM.render(<App />, div);

  console.log(div.innerHTML);

  ReactDOM.unmountComponentAtNode(div);
});
