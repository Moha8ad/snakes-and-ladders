import React from "react";
import ReactDOM from "react-dom/client";
import SnakesAndLadders from "./app/snakes-and-ladders.jsx";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SnakesAndLadders />
  </React.StrictMode>
);
