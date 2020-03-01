import { BUY_ITEM, REMOVE_FEATURE, FETCH_CAR_IMAGE_START, FETCH_CAR_IMAGE_SUCCESS, FETCH_CAR_IMAGE_FAIL } from "../constants/ActionTypes"
import axios from 'axios';

export const buyItem = item => {
  return {
    type: BUY_ITEM,
    payload: item
  }
}

export const removeFeature = feature => {
  return {
    type: REMOVE_FEATURE,
    payload: feature
  }
}

export const getCarImages = carStr => dispatch => {
  dispatch({ type: FETCH_CAR_IMAGE_START })
  axios.get(`https://www.carimagery.com/api.asmx/GetImageUrl?searchTerm={carStr.trim().toLowerCase().split(' ').join('+')}`)
    .then(res => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(res.data, "text/xml");
      const src = xml.getElementsByTagName('string')[0].childNodes[0].nodeValue;
      dispatch({ type: FETCH_CAR_IMAGE_SUCCESS, payload: src })
    })
    .catch(err => dispatch({ type: FETCH_CAR_IMAGE_FAIL }))
}