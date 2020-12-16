import {
  REQUEST_SIGN_UP,
  UPDATE_SIGN_UP,
  FAILURE_SIGN_UP,
  REQUEST_SIGN_IN,
  UPDATE_SIGN_IN,
  FAILURE_SIGN_IN,
  LOG_OUT,
} from "../types/auth.types";

const initialState = {
  isAuthenticated: false,
  token: null,
  userId: null,
  error: "",
};

const UserData = (state = initialState, action) => {
  switch (action.type) {
    // SIGN_UP
    case REQUEST_SIGN_UP:
      return {
        ...state,
        authorization: action.payload,
        error: null,
      };
    case UPDATE_SIGN_UP:
      return {
        ...state,
        authorization: action.payload,
      };
    case FAILURE_SIGN_UP:
      return {
        ...state,
        error: action.payload,
      };

    // SIGN_IN
    case REQUEST_SIGN_IN:
      return {
        ...state,
        error: null,
      };

    case UPDATE_SIGN_IN:
      return {
        ...state,
        isAuthenticated: true,
        ...action.payload,
      };

    case FAILURE_SIGN_IN:
      return {
        ...state,
        error: action.payload,
      };

    //LOG_OUT
    case LOG_OUT:
      return {
        isAuthenticated: false,
        token: null,
        user: null,
        error: "",
      };
    default:
      return state;
  }
};

export default UserData;
