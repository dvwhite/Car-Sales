import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import 'bulma/css/bulma.css';
import './styles.scss';

// Redux imports
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Reducers
import { carsReducer } from './reducers/CarsReducer';

// Components
import App from './App';

// Create the redux store
const store = createStore(carsReducer);

// Mount the App component
const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  rootElement
);
