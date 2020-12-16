import withRoot from "../modules/withRoot";
import React from "react";
import AppAppBar from "../modules/views/AppAppBar";
import UploadButton from "../UploadButton";

const Gallery = (props) => {
  return (
    <>
      <AppAppBar />
      <UploadButton {...props} />
      {/* <AdminGallery/> */}
      {/* <Gallery /> */}
      {/* <p>Gallery</p> */}
    </>
  );
};

export default withRoot(Gallery);
