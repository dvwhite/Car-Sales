import {
  FETCH_CAR_IMAGE_START,
  FETCH_CAR_IMAGE_SUCCESS,
  FETCH_CAR_IMAGE_FAIL
} from "../constants/ActionTypes";

const initialState = {
  isFetching: false,
  error: "",
  cars: [
    {
      id: 1,
      name: "Peugot RCZ",
      year: 2015,
      image: "http://www.regcheck.org.uk/image.aspx/@cGV1Z2VvdCBSQ1o=",
      price: 35720,
      features: []
    },
    {
      id: 2,
      name: "Ford Mustang",
      year: 2020,
      image: "http://www.regcheck.org.uk/image.aspx/@Zm9yZCBtdXN0YW5n",
      price: 62440,
      features: []
    },
    {
      id: 3,
      name: "Lamberghini Murcielago",
      year: 2018,
      image: "http://www.regcheck.org.uk/image.aspx/@bGFtYmVyZ2hpbmkgbXVyY2llbGFnbw==",
      price: 210530,
      features: []
    },
    {
      id: 4,
      name: "Porsche 911",
      year: 2020,
      image: "http://www.regcheck.org.uk/image.aspx/@cG9yc2NoZSA5MTE= ",
      price: 309900,
      features: []
    },
    {
      id: 5,
      name: "Chevrolet Camaro",
      year: 2019,
      image: "http://www.regcheck.org.uk/image.aspx/@Y2hldnJvbGV0IGNhbWFybw==",
      price: 86990,
      features: []
    }
  ]
};

export const carImagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAR_IMAGE_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_CAR_IMAGE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        images: [...state.images, action.payload]
      };
    case FETCH_CAR_IMAGE_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
