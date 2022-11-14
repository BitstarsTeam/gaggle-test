import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as dotenv from "dotenv";
import "./theme/app.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

dotenv.config();
