import {
  SET_SLIDER_DATA,
  FETCH_SLIDER_DATA,
  SET_SLIDER_LINK,
  FAILURE_RECEIVE_SLIDER_DATA,
} from "../types/slider.types";

import Api from "../../api";

const fetchSloderData = () => ({
  type: FETCH_SLIDER_DATA,
});

const updateSliderData = (data) => ({
  type: SET_SLIDER_DATA,
  payload: data,
});

export const updateSliderLink = (data) => ({
  type: SET_SLIDER_LINK,
  payload: data,
});

const failureReceiveSliderData = (error) => ({
  type: FAILURE_RECEIVE_SLIDER_DATA,
  payload: error,
});

export const getSliderData = (id) => async (dispatch) => {
  dispatch(fetchSloderData());
  try {
    const data = await Api.getSlider(id);

    dispatch(updateSliderData(data?.data));
  } catch (error) {
    dispatch(failureReceiveSliderData(error));
  }
};
