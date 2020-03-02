import React from 'react';

// Redux imports
import { connect } from 'react-redux';

// Components
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

// Action types and creators
import { BUY_ITEM, REMOVE_FEATURE } from './constants/ActionTypes';
import { buyItem, removeFeature } from './actions/actions';

/*
The parent component rendering all content in the application
*/
const App = (props) => {
  // Remove a feature from state
  const removeFeature = item => {
    props.removeFeature(item);
  };

  // Add an item to state
  const buyItem = item => {
    props.buyItem(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} buyItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.carsReducer.car,
    additionalFeatures: state.carsReducer.additionalFeatures,
    additionalPrice: state.carsReducer.additionalPrice
  }
}

export default connect(mapStateToProps, { buyItem, removeFeature })(App);
