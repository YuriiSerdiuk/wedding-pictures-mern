import React from 'react';
import AppAppBar from "../modules/views/AppAppBar";
import GalleryDraver from "../GalleryDraver/GalleryDraver";

const ConfigureSlider = (props) => {
  return  <>
    <AppAppBar />
    <GalleryDraver photes={[]} {...props} />
      <div className='configure-slider'>
      <p>ConfigereSlider</p>
        </div>
    </>
}

export default ConfigureSlider;
