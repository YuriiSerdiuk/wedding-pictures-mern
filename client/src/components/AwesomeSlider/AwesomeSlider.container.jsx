import React from "react";
import AwesomeSlider from "./AwesomeSlider";
import { useSelector } from "react-redux";

const AwesomeSliderContainer = (props) => {
  const applicationData = useSelector((state) => state.applicationData);

  return <AwesomeSlider photos={applicationData.photos} {...props} />;
};

export default AwesomeSliderContainer;
