import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const AwesomeSliderComponent = (props) => {
  const { photos = [] } = props;
  // console.log(photos);
  return (
    <AutoplaySlider
      animation="cubeAnimation"
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={2000}
    >
      {photos.map(({ href, name }, index) => (
        <div key={index + name + href}>
          <img style={{ width: "100%" }} src={href} alt={name} />
        </div>
      ))}
    </AutoplaySlider>
  );
};

export default AwesomeSliderComponent;
