import React from 'react';

// Redux imports
import { connect } from 'react-redux';

// Components
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

// Routing
import MasterRouter from './components/MasterRouter';

// Action types and creators
import { BUY_ITEM, REMOVE_FEATURE } from './constants/ActionTypes';
import { buyItem, removeFeature } from './actions/actions';

/*
The parent component rendering all content in the application
*/
const App = (props) => {
  return (
    <div className='App'>
      <MasterRouter />
    </div>
  );
};

export default App;
