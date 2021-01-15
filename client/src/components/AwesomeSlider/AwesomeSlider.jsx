import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const AwesomeSliderComponent = (props) => {
  const { photos = [] } = props;
  console.log(photos);
  return (
    <AutoplaySlider
      animation="cubeAnimation"
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
    >
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
          alt="for presentational images"
        />
      </div>
      <div>
        <img
          src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
          alt="for presentational images"
        />
      </div>
      <div>
        <img
          src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
          alt="for presentational images"
        />
      </div>
    </AutoplaySlider>
  );
};

export default AwesomeSliderComponent;
