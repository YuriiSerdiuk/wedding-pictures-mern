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
      const { imagesInSlider, owner, _id } = action.payload.slider;
      return {
        ...state,
        isFetch: false,
        photos: imagesInSlider,
        sliderId: _id,
        owner,
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
