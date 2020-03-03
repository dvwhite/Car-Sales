import React, { useEffect } from 'react';

// Redux imports
import { connect } from 'react-redux';

// Components
import Header from './Header';
import AddedFeatures from './AddedFeatures';
import AdditionalFeatures from './AdditionalFeatures';
import Total from './Total';

// Action types and creators
import { buyItem, removeFeature, updateCar } from '../actions/actions';

/*
The shop component where the user can add and remove new features
*/
const Car = (props) => {
  // Grab the id from the router props and use to identify the car
  useEffect(() => {
    const id = props.match.params.id;
    const car = props.cars.find(car => Number(car.id) === Number(id));
    car && props.updateCar(car);
  }, []);

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
    cars: state.carImagesReducer.cars,
    additionalFeatures: state.carsReducer.additionalFeatures,
    additionalPrice: state.carsReducer.additionalPrice
  }
}

export default connect(mapStateToProps, { buyItem, removeFeature, updateCar })(Car);
