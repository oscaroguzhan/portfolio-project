import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import App from "./App";
import GlobalStyle from "./Styles/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle>
      <App />
    </GlobalStyle>
  </React.StrictMode>,
  document.getElementById("root")
);
