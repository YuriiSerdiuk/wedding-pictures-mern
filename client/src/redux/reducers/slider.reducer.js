import {
  SET_SLIDER_DATA,
  FETCH_SLIDER_DATA,
  SET_SLIDER_LINK,
  FAILURE_RECEIVE_SLIDER_DATA,
} from "../types/slider.types";
import { URL, URL_PATHS } from "../../constants/api.constants";
const initialState = {
  sliderId: null,
  isFetch: false,
  link: "",
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

    case SET_SLIDER_LINK:
      const { _id } = action.payload.slider;
      return {
        ...state,
        sliderId: _id,
        link: `${URL}${URL_PATHS.slider}/${_id}`,
        ...action.payload.slider,
      };

    case SET_SLIDER_DATA:
      // const { _id } = action.payload.slider;
      return {
        ...state,
        isFetch: false,
        sliderId: _id,
        ...action.payload.slider,
      };

    case FAILURE_RECEIVE_SLIDER_DATA:
      return {
        ...state,
        sliderId: null,
        isFetch: false,
        link: "",
        photos: [],
        owner: null,
        delay: null,
        slideEffect: null,
        sound: null,
        error: "",
      };

    default:
      return state;
  }
};

export default ApplicationData;
