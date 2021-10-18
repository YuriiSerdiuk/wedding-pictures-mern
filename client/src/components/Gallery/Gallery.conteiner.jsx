import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Modal from "./modal";
import apiServise from "../../api";
import { toBase64, delay } from "../../utils/helpers";
import { getPhotosMongoDB } from "../../redux/actions/applicationData.action";
import { updateSliderLink } from "../../redux/actions/slider.action";
import { getlogOut } from "../../redux/actions/auth.action";
import AutoRotatingCarousel from "../AutoRotatingCarouselModal";
import PhotoLayaut from '../PhotoLayaut'

const GalleryContainer = (props) => {
  const [open, setModalOpen] = React.useState(false);
  const auth = useSelector((state) => state.authorisation);
  const snackbar = useSelector((state) => state.snackbar);
  const applicationData = useSelector((state) => state.applicationData);
  const slider = useSelector((state) => state.slider);
  const dispatch = useDispatch();

  // updatePhotos
  useEffect(() => {
    auth?.userId && dispatch(getPhotosMongoDB(auth.userId));
    // eslint-disable-next-line
  }, [auth]);

  const [handleOpen, setHandleOpen] = useState({ open: false });
  const [slideIndex, setSlideIndex] = useState(0);

  const fileSelectedHendler = async (event) => {
    const files = Array.from(event.target.files);
    if (files.length) {
      postFiles(files);
    }
  };

  // upload uploaded file to the server storage
  const postFiles = (files) => {
    console.log('#-files',files);
    async function delayedLog(item) {
      console.log('#-start async func');
      await delay(2000);
      let file = item;
      console.log('#-item',item);
      const regex = /^[a-z]+/gm;
      const type = regex.exec(file.type);
      console.log('#-type',type);
      await (async function Main() {
        console.log('#-start async func 2');
        const obj = {
          name: file.name,
          size: file.size,
          type: file.type,
          userId: auth.userId,
          base64Type: type && type[0],
          lastModified: file.lastModified,
          lastModifiedDate: file.lastModifiedDate,
          base64: await toBase64(file),
        };
        console.log('#-obj',obj);
        try {
          console.log('#-try');
         const res =  await apiServise.uploadImage(obj);
          console.log('#-res',res);
          auth?.userId && dispatch(getPhotosMongoDB(auth.userId));
        } catch (error) {
          alert(` error upload ${error}`);
        }
      })();
    }

    async function processArray(array) {
      for (const item of array) {
        await delayedLog(item);
      }
      // setFiles(null);
      console.log("All file successfully  Downloaded!");
    }

    processArray(files);
  };
  //logOut
  const handleLogOut = () => {
    dispatch(getlogOut());
  };

  const handleClick = (id) => {
    setSlideIndex(id || 0);
    setHandleOpen({ open: true });
  };

  return (
    <>
      {/*<Modal open={open} setOpen={setModalOpen} slider={slider} />*/}
      <AutoRotatingCarousel
        handleOpen={handleOpen}
        setHandleOpen={setHandleOpen}
        applicationData={applicationData}
        setSlideIndex={setSlideIndex}
        snackbar={snackbar}
        handleLogOut={handleLogOut}
        handleClick={handleClick}
        slideIndex={slideIndex}
        setModalOpen={setModalOpen}

        {...props} />
      <PhotoLayaut
        fileSelectedHendler={fileSelectedHendler}
        handleClick={handleClick}
        setSlideIndex={setSlideIndex}
        {...props}/>
    </>
  );
};

export default GalleryContainer;
