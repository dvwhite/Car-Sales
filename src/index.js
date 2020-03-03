import React from "react";
import ReactDOM from "react-dom";

// Styles
import "bulma/css/bulma.css";
import "./styles.scss";

// Routing
import { BrowserRouter as Router } from "react-router-dom";

// Redux imports
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

// Reducers
import { rootReducer } from './reducers/index';

// Components
import App from "./App";

// Logger
import logger from 'redux-logger';

// Create the redux store
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

// Mount the App component
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);
