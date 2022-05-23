import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { Counter } from "./components/Counter";

// const a = React.createElement("div", { className: "some" }, [
//     React.createElement("h2", {key: 1}, ["Hello World!"]),
//     React.createElement("hr", {key: 2}),
//     React.createElement("p", {key: 3}, ["text"]),
// ]);

{
    /* <div class="some">
    <h2>Hello World!</h2>
    <hr>
    <p>text</p>
</div> */
}

// ReactDOM.render(<div>Hello world!</div>, document.querySelector('.app'));
const root = createRoot(document.querySelector(".app"));

root.render(<Counter min={10} max={30} />);
