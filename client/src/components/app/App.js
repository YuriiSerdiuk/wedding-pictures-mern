import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../Home";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import AwesomeSlider from "../AwesomeSlider";
import Wrapper from '../wrapper';
import Gallery from "../Gallery";

import "./App.scss";

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

          <Route path="/wrapper/gallery">
            <Wrapper {...props} >
              <Gallery {...props}/>
            </Wrapper>
          </Route>

          <Route path="/wrapper">
            <Wrapper {...props} />
          </Route>

          <Route path="/slider/:id">
            <AwesomeSlider {...props} />
          </Route>
          <Route path="/slider">
            <AwesomeSlider {...props} />
          </Route>

          <Route path="/">
            {/* <DragDrop /> */}
            <Home {...props} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
