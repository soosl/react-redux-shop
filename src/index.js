import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";

// ReactDOM.render(<div>Hello world!</div>, document.querySelector('.app'));
const root = createRoot(document.querySelector(".app"));

root.render(<App />);
