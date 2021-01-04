import withRoot from "../modules/withRoot";
import React from "react";
import AppAppBar from "../modules/views/AppAppBar";
import GalleryDraver from "../GalleryDraver";
import App from "../AutoRotatingCarouselModal";

const Gallery = (props) => {
  return (
    <>
      <AppAppBar />
      <App {...props} />
      <GalleryDraver {...props} />
    </>
  );
};

export default withRoot(Gallery);
