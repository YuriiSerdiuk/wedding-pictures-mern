import {
  SET_SLIDER_DATA,
  FETCH_SLIDER_DATA,
  SET_SLIDER_LINK,
  FAILURE_RECEIVE_SLIDER_DATA,
} from "../types/slider.types";
import { URL, URL_PATHS } from "../../constants/api.constants";

const initialState = {

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


    default:
      return state;
  }
};

export default ApplicationData;
