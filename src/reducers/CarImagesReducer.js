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
      features: [],
      additionalFeatures: [
        { id: 1, name: "1.6M Turbo engine", price: 2500 },
        { id: 2, name: "Twin sports exhaust", price: 500 },
        { id: 3, name: "Aluminum twin arches", price: 1200 },
        { id: 4, name: "Rear spoiler", price: 300 },
        { id: 5, name: "Sports steering wheel", price: 90 },
        { id: 6, name: "Racing detail package", price: 1500 },
      ]
    },
    {
      id: 2,
      name: "Ford Mustang",
      year: 2020,
      image: "http://www.regcheck.org.uk/image.aspx/@Zm9yZCBtdXN0YW5n",
      price: 26670,
      features: [],
      additionalFeatures: [
        { id: 1, name: "Convertible", price: 5500 },
        { id: 2, name: "Grabber Lime color", price: 90 },
        { id: 3, name: "2.3L high performance engine", price: 4995 },
        { id: 4, name: "10-speed automatic tarnsmission", price: 1595 },
        { id: 5, name: "19-inch x 9-inch nickel-painted rims", price: 795 }
      ]
    },
    {
      id: 3,
      name: "Lamberghini Murcielago",
      year: 2018,
      image: "http://www.regcheck.org.uk/image.aspx/@bGFtYmVyZ2hpbmkgbXVyY2llbGFnbw==",
      price: 210530,
      features: [],
      additionalFeatures: [
        { id: 1, name: "Forged brilliant silver rims", price: 6000 },
        { id: 2, name: "Exterior carbon component", price: 3000 },
        { id: 3, name: "Black ceramic exhaust pipes", price: 2500 },
        { id: 4, name: "Aluminum rev counter", price: 1750 },
        { id: 5, name: "Daytona seats", price: 1500 },
        { id: 6, name: "Rosso Ferrari seat color", price: 1200 }
      ]
    },
    {
      id: 4,
      name: "Porsche 911 Carrera",
      year: 2020,
      image: "http://www.regcheck.org.uk/image.aspx/@cG9yc2NoZSA5MTE= ",
      price: 98750,
      features: [],
      additionalFeatures: [
        { id: 1, name: "Gentian Black color", price: 830 },
        { id: 2, name: `20"/21" RS Spyder wheels`, price: 90 },
        { id: 3, name: "Club leather interior", price: 6040 },
        { id: 4, name: "Adaptive sport seats", price: 3470 },
        { id: 5, name: "Porsche ceramic composite brakes", price: 8970 },
        { id: 6, name: "Power steering plus", price: 280 },
        { id: 7, name: "Sports exhaust system", price: 2950 },
        { id: 8, name: "LED matrix design headlights", price: 3270 },
        { id: 9, name: "Heated GT Sport steering wheel", price: 1470 },
        { id: 10, name: "Interior trim in Paldao wood", price: 900 },
        { id: 11, name: "Burmester High-End Surround Sound", price: 900 }
      ]
    },
    {
      id: 5,
      name: "Chevrolet Camaro Coupe",
      year: 2019,
      image: "http://www.regcheck.org.uk/image.aspx/@Y2hldnJvbGV0IGNhbWFybw==",
      price: 25995,
      features: [],
      additionalFeatures: [
        { id: 1, name: "6.2L Supercharged V8 DI engine", price: 37000 },
        { id: 2, name: "Center tripe, black metallic", price: 470 },
        { id: 3, name: "ZL1 1LE Extreme Track Performance package", price: 7500 },
        { id: 4, name: "Power sunroof", price: 995 },
        { id: 5, name: "Carbon fiber spoiler", price: 5495 },
      ]
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
