import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Gallery from "./components/Gallery";

function App(props) {
  // console.log("App", props);
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/sign-in">
              <SignIn {...props} />
            </Route>
            <Route path="/sign-up">
              <SignUp {...props} />
            </Route>
            <Route path="/gallery">
              <Gallery {...props} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
