import { MESSAGE, ERROR } from "../types/snackbar.types";

export const getSnackbarMessage = (payload) => ({
  type: MESSAGE,
  payload,
});

export const getSnackbarEroor = (errorMessage) => ({
  type: ERROR,
  payload: errorMessage,
});
