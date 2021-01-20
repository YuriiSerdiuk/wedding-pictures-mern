import React, { useEffect } from "react";
import AwesomeSlider from "./AwesomeSlider";
import { useSelector, useDispatch } from "react-redux";

import { getPhotosMongoDB } from "../../redux/actions/applicationData.action";
const AwesomeSliderContainer = (props) => {
  const auth = useSelector((state) => state.authorisation);
  const applicationData = useSelector((state) => state.applicationData);
  const dispatch = useDispatch();

  useEffect(() => {
    auth?.userId && dispatch(getPhotosMongoDB(auth.userId));
    // eslint-disable-next-line
  }, [auth]);

  return <AwesomeSlider photos={applicationData.photos} {...props} />;
};

export default AwesomeSliderContainer;
