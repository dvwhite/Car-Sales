import { FETCH_CAR_IMAGE_START, FETCH_CAR_IMAGE_SUCCESS, FETCH_CAR_IMAGE_FAIL } from "./../constants/ActionTypes";

const initialState = {
  isFetching: false,
  error: '',
  images: []
}

export const carImagesReducer = (state = initialState, action) => {
  switch(action.type) {  
    case FETCH_CAR_IMAGE_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case FETCH_CAR_IMAGE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        images: [
          ...state.images,
          action.payload
        ]
      }
    case FETCH_CAR_IMAGE_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload;
      }
    default:
      return state;
  }
}