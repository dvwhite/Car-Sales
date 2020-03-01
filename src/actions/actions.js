import { BUY_ITEM, REMOVE_FEATURE } from "../constants/ActionTypes"

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