import { combineReducers } from 'redux';
import { carImagesReducer } from './carImagesReducer';
import { carsReducer } from './carsReducer';

export const rootReducer = combineReducers({
  carImagesReducer,
  carsReducer
});