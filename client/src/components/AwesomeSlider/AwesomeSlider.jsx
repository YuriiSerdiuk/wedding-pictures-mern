import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
// import "react-awesome-slider/dist/custom-animations/cube-animation.css";
// import "react-awesome-slider/dist/styles.css";

import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';


const AutoplaySlider = withAutoplay(AwesomeSlider);

const AwesomeSliderComponent = (props) => {
  const { photos, interval, sliderAnimation } = props;

  console.log(interval)
  console.log(sliderAnimation)
  return (
    <AutoplaySlider
      animation={sliderAnimation}
      cssModule={[CoreStyles, AnimationStyles]}
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={interval}
      bullets={false}
    >
      {photos.map(({ href, name }, index) => (
        <div style={{width:'100%',height:'100%'}} key={index + name + href}>
          <img src={href} alt={name} />
        </div>
      ))}
    </AutoplaySlider>
  );
};

export default AwesomeSliderComponent;
