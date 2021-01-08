import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Gallery from "./components/Gallery";

function App(props) {
  const {
    auth: { isAuthenticated },
  } = props;

  return (
    <div className="App">
      <div>
        <Switch>
          <Route path="/sign-in">
            {isAuthenticated ? <Gallery {...props} /> : <SignIn {...props} />}
          </Route>
          <Route path="/sign-up">
            {isAuthenticated ? <Gallery {...props} /> : <SignUp {...props} />}
          </Route>
          <Route path="/gallery">
            <Gallery {...props} />
          </Route>
          <Route path="/">
            <Home {...props} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
