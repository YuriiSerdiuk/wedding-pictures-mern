import {
  SET_SLIDER_DATA,
  FETCH_SLIDER_DATA,
  FAILURE_RECEIVE_SLIDER_DATA,
} from "../types/slider.types";

const initialState = {
  sliderId: null,
  isFetch: false,
  photos: [],
  owner: null,
  delay: null,
  slideEffect: null,
  sound: null,
  error: "",
};

const ApplicationData = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SLIDER_DATA:
      return {
        ...state,
        isFetch: true,
      };

    case SET_SLIDER_DATA:
      const { _id } = action.payload.slider;
      return {
        ...state,
        isFetch: false,
        sliderId: _id,
        ...action.payload.slider,
      };

    case FAILURE_RECEIVE_SLIDER_DATA:
      return {
        ...state,
        isFetch: false,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default ApplicationData;
