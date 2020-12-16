import apiService from "../../api";
import {
  REQUEST_SIGN_UP,
  UPDATE_SIGN_UP,
  FAILURE_SIGN_UP,
  REQUEST_SIGN_IN,
  UPDATE_SIGN_IN,
  FAILURE_SIGN_IN,
  LOG_OUT,
} from "../types/auth.types";
import { getSnackbarMessage } from "./snackbar.action";
import { SNACKBAR_MESSAGE_TYPES } from "../../constants/misc.constants";

const storageName = "userData";

const requestSighUp = () => ({
  type: REQUEST_SIGN_UP,
});

const updateSignUpData = (data) => ({
  type: UPDATE_SIGN_UP,
  payload: data,
});

const failureSignUp = (err) => ({
  type: FAILURE_SIGN_UP,
  payload: err,
});

const requestSighIn = () => ({
  type: REQUEST_SIGN_IN,
});

const updateSignInData = (data) => ({
  type: UPDATE_SIGN_IN,
  payload: data,
});

const failureSignIn = (err) => ({
  type: FAILURE_SIGN_IN,
  payload: err,
});
const logOut = (err) => ({
  type: LOG_OUT,
  payload: err,
});

export const fetchSignUp = (params) => async (dispatch) => {
  try {
    dispatch(requestSighUp());

    const data = await apiService.getSignUp(params);
    dispatch(
      getSnackbarMessage({
        text: "Вітаємо Ви успішно зареєструвались",
        variant: SNACKBAR_MESSAGE_TYPES.SUCCESS,
      })
    );
    dispatch(updateSignUpData(data));
  } catch (error) {
    dispatch(
      getSnackbarMessage({
        text: error.response.data.message,
        variant: SNACKBAR_MESSAGE_TYPES.ERROR,
      })
    );
    console.log("fetchSignUp", error);
    dispatch(failureSignUp(error));
  }
};

export const fetchSignIn = (params) => async (dispatch) => {
  try {
    dispatch(requestSighIn());
    const data = await apiService.getSignIn(params);
    dispatch(
      getSnackbarMessage({
        text: "Успішний вхід",
        variant: SNACKBAR_MESSAGE_TYPES.SUCCESS,
      })
    );
    // seve to localstorage id and token
    localStorage.setItem(
      storageName,
      JSON.stringify({
        userId: data.data.userId,
        token: data.data.token,
      })
    );

    dispatch(updateSignInData(data.data));
  } catch (error) {
    console.log(error.response);

    dispatch(
      getSnackbarMessage({
        text: error.response
          ? error.response?.data?.message
          : "sorry server is ded",
        variant: SNACKBAR_MESSAGE_TYPES.ERROR,
      })
    );
    dispatch(failureSignIn(error));
  }
};

export const storageSignIn = (data) => (dispatch) => {
  dispatch(updateSignInData(data));
};

export const getlogOut = () => async (dispatch) => {
  try {
    dispatch(logOut());
    localStorage.removeItem(storageName);
    dispatch(
      getSnackbarMessage({
        text: "Успішний вихід",
        variant: SNACKBAR_MESSAGE_TYPES.INFO,
      })
    );
  } catch (error) {
    dispatch(
      getSnackbarMessage({
        text: "Упс ... ",
        variant: SNACKBAR_MESSAGE_TYPES.ERROR,
      })
    );
  }
};
