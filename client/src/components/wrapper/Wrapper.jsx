import React from 'react';
import { useHistory } from 'react-router-dom';

import withRoot from "../modules/withRoot";
import AppAppBar from "../modules/views/AppAppBar";
import GalleryDraver from "../GalleryDraver/GalleryDraver";
import apiServise from "../../api/api";
import { updateSliderLink } from "../../redux/actions/slider.action";

const Wrapper = (props) => {
  const { children, dispatch, auth } = props;
  const { isAuthenticated } = auth;

  const history = useHistory();

  if (!isAuthenticated) {
    console.log('work', props);
    history.push('/sign-in');
  }

  const addNewSlider = async ({ userId, photos }) => {
    try {
      const result = await apiServise.addNewSlider({
        userId,
        photos
      });
      if (result.status === 201) {
        dispatch(updateSliderLink(result.data));
      } else {
        throw new Error("Error in creating new slider");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <>
    <AppAppBar />
    <GalleryDraver
      addNewSlider={addNewSlider} {...props} >
      {children}
    </GalleryDraver>
  </>
}

export default withRoot(Wrapper);
