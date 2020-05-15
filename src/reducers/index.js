import { combineReducers } from 'redux';
import { carImagesReducer } from './CarImagesReducer';
import { carsReducer } from './CarsReducer';

export const rootReducer = combineReducers({
  carImagesReducer,
  carsReducer
});