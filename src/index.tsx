import React, { useState } from "react";

import "./index.css";

import { render } from "react-dom"; // <- This is the correct import // statement for React version 17

import App from "./App";

const root = document.getElementById("app-root");
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
