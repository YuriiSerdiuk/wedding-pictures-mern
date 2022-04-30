import {
  SET_SLIDER_DATA,
  FETCH_SLIDER_DATA,
  SET_SLIDER_LINK,
  FAILURE_RECEIVE_SLIDER_DATA,
} from "../types/slider.types";

import Api from "../../api";

const fetchSliderData = () => ({
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
  dispatch(fetchSliderData());
  try {
    const data = await Api.getSlider(id);
   dispatch(updateSliderData(data?.data.slider));
  } catch (error) {
    dispatch(failureReceiveSliderData(error));
  }
};

export const generateNewSlider = (params) => async (dispatch) => {
  try {
    const data = await Api.addNewSlider(params);
    console.log('data_2',data)
     dispatch(updateSliderData(data?.data.slider));
  } catch (error) {
     dispatch(failureReceiveSliderData(error));
  }
};
