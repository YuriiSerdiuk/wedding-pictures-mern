import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";

import App from "./App";
import {
  fetchSignUp,
  fetchSignIn,
  storageSignIn,
} from "./redux/actions/auth.action";
import { getSnackbarMessage } from "./redux/actions/snackbar.action";
import { storageName } from "./constants/misc.constants";

const AppContainer = (props) => {
  const { snackbar, storageSignIn } = props;
  const { enqueueSnackbar } = useSnackbar();
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
      storageSignIn(data);
    }
  }, [storageSignIn]);

  const gotoSignUp = () => {
    history.push("/sign-up");
  };

  return <App gotoSignUp={gotoSignUp} {...props} />;
};

const mapStateToProps = ({ authorisation, snackbar }) => ({
  auth: authorisation,
  snackbar: snackbar,
});

const mapDispatchToProps = {
  fetchSignUp,
  fetchSignIn,
  getSnackbarMessage,
  storageSignIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
