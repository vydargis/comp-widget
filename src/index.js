import React from "react";
import ReactDOM from "react-dom";
import CompWidget from "./CompWidget/index";

const App = () => <CompWidget />;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
