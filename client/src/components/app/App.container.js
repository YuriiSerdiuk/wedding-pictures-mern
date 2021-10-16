import React, { useEffect } from "react";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import App from "./App";
import {
  fetchSignUp,
  fetchSignIn,
  storageSignIn,
} from "../../redux/actions/auth.action";
import { getSnackbarMessage } from "../../redux/actions/snackbar.action";
import { storageName } from "../../constants/misc.constants";

const AppContainer = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const auth = useSelector((state) => state.authorisation);
  const snackbar = useSelector((state) => state.snackbar);
  const constants = useSelector((state) => state.constants);
  const applicationData = useSelector((state) => state.applicationData);
  const dispatch = useDispatch();
  let history = useHistory();

  // SnackBarMessage
  useEffect(() => {
    if (snackbar?.text && snackbar?.variant) {
      const { text, variant } = snackbar;
      enqueueSnackbar(text, { variant });
    }
  }, [enqueueSnackbar, snackbar]);

  // SignIn localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));
    if (data && data.token) {
      dispatch(storageSignIn(data));
    }
    // eslint-disable-next-line
  }, [storageSignIn]);

  const gotoSignUp = () => {
    history.push("/sign-up");
  };

  return (
    <App
      auth={auth}
      dispatch={dispatch}
      applicationData={applicationData}
      snackbar={snackbar}
      constants={constants}
      LANGUAGES={constants.LANGUAGES}
      gotoSignUp={gotoSignUp}
      fetchSignUp={(e) => {
        dispatch(fetchSignUp(e));
      }}
      fetchSignIn={(e) => {
        dispatch(fetchSignIn(e));
      }}
      getSnackbarMessage={(e) => {
        dispatch(getSnackbarMessage(e));
      }}
      {...props}
    />
  );
};

export default AppContainer;
