import { FETCH_CAR_IMAGE_START, FETCH_CAR_IMAGE_SUCCESS, FETCH_CAR_IMAGE_FAIL } from "../constants/ActionTypes";

const initialState = {
  isFetching: false,
  error: '',
  images: [
    {alt: 'Peugot RCZ', src: 'http://www.regcheck.org.uk/image.aspx/@cGV1Z2VvdCBSQ1o='},
    {alt: 'Ford Mustang', src: 'http://www.regcheck.org.uk/image.aspx/@Zm9yZCBtdXN0YW5n'},
    {alt: 'Lamberghini Murcielago', src: 'http://www.regcheck.org.uk/image.aspx/@bGFtYmVyZ2hpbmkgbXVyY2llbGFnbw=='},
    {alt: 'Porsche 911', src: 'http://www.regcheck.org.uk/image.aspx/@cG9yc2NoZSA5MTE= '},
    {alt: 'Chevrolet Camaro', src: 'http://www.regcheck.org.uk/image.aspx/@Y2hldnJvbGV0IGNhbWFybw== '}
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