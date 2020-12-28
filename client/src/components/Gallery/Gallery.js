import withRoot from "../modules/withRoot";
import React from "react";
import AppAppBar from "../modules/views/AppAppBar";
import UploadButton from "../UploadButton";
import PhotoLayaut from "../PhotoLayaut";

const Gallery = (props) => {
  return (
    <>
      <AppAppBar />
      <UploadButton {...props} />
      <PhotoLayaut {...props} />
    </>
  );
};

export default withRoot(Gallery);
