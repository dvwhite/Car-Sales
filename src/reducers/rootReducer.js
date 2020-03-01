import { combineReducers } from 'react-redux';
import { carImagesReducer } from './CarImagesReducer';
import { carsReducer } from './CarsReducer';

export const rootReducer = () => {
  return combineReducers(
    carImagesReducer,
    carsReducer
  )
}