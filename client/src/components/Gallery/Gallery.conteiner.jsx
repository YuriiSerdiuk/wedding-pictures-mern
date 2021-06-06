import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Gallery from "./Gallery";
import Modal from "./modal";
import apiServise from "../../api";
import { toBase64, delay } from "../../utils/helpers";
import { getPhotosMongoDB } from "../../redux/actions/applicationData.action";
import { updateSliderLink } from "../../redux/actions/slider.action";
import { getlogOut } from "../../redux/actions/auth.action";

const GalleryContainer = (props) => {
  const [open, setModalOpen] = React.useState(false);
  const auth = useSelector((state) => state.authorisation);
  const snackbar = useSelector((state) => state.snackbar);
  const applicationData = useSelector((state) => state.applicationData);
  const slider = useSelector((state) => state.slider);
  const dispatch = useDispatch();

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
    async function delayedLog(item) {
      await delay(2000);
      let file = item;
      const regex = /^[a-z]+/gm;
      const type = regex.exec(file.type);

      await (async function Main() {
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
        try {
          await apiServise.uploadImage(obj);

          auth?.userId && dispatch(getPhotosMongoDB(auth.userId));
        } catch (error) {
          alert("error upload");
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

  const addNewSlider = async (props) => {
    try {
      const result = await apiServise.addNewSlider({
        ...props,
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

  return (
    <>
      <Modal open={open} setOpen={setModalOpen} slider={slider} />
      <Gallery
        applicationData={applicationData}
        snackbar={snackbar}
        fileSelectedHendler={fileSelectedHendler}
        handleLogOut={handleLogOut}
        handleOpen={handleOpen}
        handleClick={handleClick}
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
        setHandleOpen={setHandleOpen}
        addNewSlider={addNewSlider}
        setModalOpen={setModalOpen}
        {...props}
      />
    </>
  );
};

export default GalleryContainer;
