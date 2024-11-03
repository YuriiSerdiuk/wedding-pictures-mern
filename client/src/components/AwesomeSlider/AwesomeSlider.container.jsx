import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import AwesomeSlider from "./AwesomeSlider";

import { getSliderData } from "../../redux/actions/slider.action";

const AwesomeSliderContainer = (props) => {
  const applicationData = useSelector((state) => state.applicationData);
  const slider = useSelector((state) => state.slider);
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    try {
      dispatch(getSliderData(id));
    } catch (error) {
      console.log("error", error);
    }
    // eslint-disable-next-line
  }, []);

  if (!!applicationData.photos.length) {
    return <AwesomeSlider
      photos={applicationData.photos}
      interval={1000}
      sliderAnimation={'cubeAnimation'}

    />;
  }

  return (
    !!slider.photos.length && (
      <AwesomeSlider
        photos={slider.photos}
        interval={slider.interval}
        sliderAnimation={slider.sliderAnimation}
      />
    )
  );
};

export default AwesomeSliderContainer;
