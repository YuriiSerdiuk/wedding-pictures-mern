import React, { useEffect } from "react";
import AwesomeSlider from "./AwesomeSlider";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getPhotosMongoDB } from "../../redux/actions/applicationData.action";
import Api from "../../api";
const AwesomeSliderContainer = (props) => {
  let { id } = useParams();
  const auth = useSelector((state) => state.authorisation);

  useEffect(() => {
    auth?.userId && dispatch(getPhotosMongoDB(auth.userId));
    // eslint-disable-next-line
  }, [auth]);

  const applicationData = useSelector((state) => state.applicationData);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const getData = async () => {
        const data = await Api.getSlider(id);
        return data.data;
      };

      getData();
    } catch (error) {
      console.log("error", error);
    }

    // eslint-disable-next-line
  }, []);

  return <AwesomeSlider photos={applicationData.photos} {...props} />;
};

export default AwesomeSliderContainer;
