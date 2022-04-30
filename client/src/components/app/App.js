import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../Home";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import AwesomeSlider from "../AwesomeSlider";
import Wrapper from '../wrapper';
import Gallery from "../Gallery";
import SettingSliderPanel from "../SettingSliderPanel";

import "./App.scss";
import Modal from "../Gallery/modal";
import {useSelector} from "react-redux";

function App(props) {

  const [open, setModalOpen] = React.useState(false);
  const slider = useSelector((state) => state.slider);

  const {
    auth: { isAuthenticated },
  } = props;

  return (
    <div className="App">
      <Modal open={open} setOpen={setModalOpen} slider={slider} />
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

          <Route path="/wrapper/configure">
            <Wrapper {...props} open={open}   setModalOpen={setModalOpen}>
              <SettingSliderPanel {...props} open={open}   setModalOpen={setModalOpen} />
            </Wrapper>
          </Route>

          <Route path="/slider/:id">
            <AwesomeSlider {...props} />
          </Route>
          <Route path="/slider">
            <AwesomeSlider {...props} />
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
