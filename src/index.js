import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import App from "./App";
import GlobalStyle from "./Styles/GlobalStyles";
import store from "./redux/configureStore";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
