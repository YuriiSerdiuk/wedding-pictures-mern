import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import AppContainer from "./App.container";
import * as serviceWorker from "./serviceWorker";
import store from "./redux";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <AppContainer />
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
