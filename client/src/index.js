import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { BrowserRouter as Router } from "react-router-dom";

import AppContainer from "./components/app/App.container";
import * as serviceWorker from "./serviceWorker";
import store from "./redux";
import "./index.scss";

ReactDOM.render(
  <>
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <Router>
          <AppContainer />
        </Router>
      </SnackbarProvider>
    </Provider>
  </>,
  document.getElementById("root")
);

serviceWorker.unregister();
