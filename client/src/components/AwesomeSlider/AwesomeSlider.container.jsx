import React, { useEffect } from "react";
import AwesomeSlider from "./AwesomeSlider";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Api from "../../api";
import { getSliderData } from "../../redux/actions/slider.action";

const data = [
  {
    href:
      "https://wedding-pictures.herokuapp.com/uploads/5fe713dae2cdb00017b3caee/Знімок екрана 2020-10-01 о 15.34.49.png",
  },
  {
    href:
      "https://wedding-pictures.herokuapp.com/uploads/5fe713dae2cdb00017b3caee/Знімок екрана 2020-10-01 о 15.34.49.png",
  },
  {
    href:
      "https://wedding-pictures.herokuapp.com/uploads/5fe713dae2cdb00017b3caee/Знімок екрана 2020-10-01 о 15.34.49.png",
  },
  {
    href:
      "https://wedding-pictures.herokuapp.com/uploads/5fe713dae2cdb00017b3caee/Знімок екрана 2020-10-01 о 15.34.49.png",
  },
];
// import { getPhotosMongoDB } from "../../redux/actions/applicationData.action";
const AwesomeSliderContainer = (props) => {
  const applicationData = useSelector((state) => state.applicationData);
  const slider = useSelector((state) => state.slider);
  const dispatch = useDispatch();
  let { id } = useParams();
  // const auth = useSelector((state) => state.authorisation);

  // useEffect(() => {
  //   auth?.userId && dispatch(getPhotosMongoDB(auth.userId));
  //   // eslint-disable-next-line
  // }, [auth]);

  useEffect(() => {
    try {
      dispatch(getSliderData(id));
    } catch (error) {
      console.log("error", error);
    }

    // eslint-disable-next-line
  }, []);

  if (!!applicationData.photos.length) {
    return <AwesomeSlider photos={applicationData.photos} {...props} />;
  }

  return (
    !!slider.photos.length && (
      <AwesomeSlider photos={slider.photos} delay={slider.delay} {...props} />
    )
  );
};

export default AwesomeSliderContainer;
