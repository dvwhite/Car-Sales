import axios from "axios";

// Action types
import {
  BUY_ITEM,
  REMOVE_FEATURE,
  UPDATE_CAR,
  FETCH_CAR_IMAGE_START,
  FETCH_CAR_IMAGE_SUCCESS,
  FETCH_CAR_IMAGE_FAIL
} from "../constants/ActionTypes";

// Event handlers

// Adds an item for purchase, typically
// a feature to compliment the car
export const buyItem = item => {
  return {
    type: BUY_ITEM,
    payload: item
  };
};
// Remove a feature selected
export const removeFeature = feature => {
  return {
    type: REMOVE_FEATURE,
    payload: feature
  };
};
// Updates the car object in the carsReducer state
export const updateCar = car => {
  return {
    type: UPDATE_CAR,
    payload: car
  }
}

// Fetches an image from the car imagery API
export const getCarImages = carStr => dispatch => {
  dispatch({ type: FETCH_CAR_IMAGE_START });
  axios
    .get(
      `https://www.carimagery.com/api.asmx/GetImageUrl?searchTerm={carStr.trim().toLowerCase().split(' ').join('+')}`
    )
    .then(res => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(res.data, "text/xml");
      const src = xml.getElementsByTagName("string")[0].childNodes[0].nodeValue;
      dispatch({ type: FETCH_CAR_IMAGE_SUCCESS, payload: src });
    })
    .catch(err => dispatch({ type: FETCH_CAR_IMAGE_FAIL }));
};
