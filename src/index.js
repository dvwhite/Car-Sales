import React from "react";
import ReactDOM from "react-dom";

// Styles
import "bulma/css/bulma.css";
import "./styles.scss";

// Redux imports
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

// Reducers
import { carsReducer } from "./reducers/CarsReducer";

// Components
import App from "./App";

// Create the redux store
const store = createStore(carsReducer, applyMiddleware(thunk));

// Mount the App component
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
