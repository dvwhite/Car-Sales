import { FETCH_CAR_IMAGE_START, FETCH_CAR_IMAGE_SUCCESS, FETCH_CAR_IMAGE_FAIL } from "../constants/ActionTypes";

const initialState = {
  isFetching: false,
  error: '',
  cars: [
    {name: '2015 Peugot RCZ', url: 'http://www.regcheck.org.uk/image.aspx/@cGV1Z2VvdCBSQ1o=', price: 35720},
    {name: '2020 Ford Mustang', url: 'http://www.regcheck.org.uk/image.aspx/@Zm9yZCBtdXN0YW5n', price: 62440},
    {name: '2020 Lamberghini Murcielago', url: 'http://www.regcheck.org.uk/image.aspx/@bGFtYmVyZ2hpbmkgbXVyY2llbGFnbw==', price: 210530},
    {name: '2020 Porsche 911', url: 'http://www.regcheck.org.uk/image.aspx/@cG9yc2NoZSA5MTE= ', price: 309900},
    {name: '2020 Chevrolet Camaro', url: 'http://www.regcheck.org.uk/image.aspx/@Y2hldnJvbGV0IGNhbWFybw==', price: 86990}
  ]
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
        error: action.payload
      }
    default:
      return state;
  }
}