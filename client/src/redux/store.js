import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import Auth from "./reducers/auth.reducer";
import Snackbar from "./reducers/snackbar.reducer";

const rootReducer = combineReducers({
  authorisation: Auth,
  snackbar: Snackbar,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
