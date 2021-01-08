import { LANGUAGES } from "../../constants/misc.constants";

const initialState = {
  LANGUAGES: LANGUAGES,
};

const Constants = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default Constants;
