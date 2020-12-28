import {
  FETCH_APPLICATION_DATA,
  UPDATE_APPLICATION_DATA,
  FAILURE_RECEIVE_APPLICATION_DATA,
} from "../types/applicationData.types";

const initialState = {
  photos: [],
  isFatching: false,
  error: "",
};

const ApplicationData = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APPLICATION_DATA:
      return {
        ...state,
        isFatching: true,
      };

    case UPDATE_APPLICATION_DATA:
      return {
        ...state,
        isFatching: false,
        photos: action.payload,
      };

    case FAILURE_RECEIVE_APPLICATION_DATA:
      return {
        photos: [],
        isFatching: false,
        error: "",
      };

    default:
      return state;
  }
};

export default ApplicationData;
