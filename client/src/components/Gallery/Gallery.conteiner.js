import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Gallery from "./Gallery";
import apiServise from "../../api";
import { toBase64, delay } from "../../utils/helpers";
import { getPhotosMongoDB } from "../../redux/actions/applicationData.action";

const GalleryContainer = (props) => {
  const auth = useSelector((state) => state.authorisation);
  const snackbar = useSelector((state) => state.snackbar);
  const applicationData = useSelector((state) => state.applicationData);
  const dispatch = useDispatch();

  useEffect(() => {
    auth?.userId && dispatch(getPhotosMongoDB(auth.userId));
    // eslint-disable-next-line
  }, [auth]);

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

      (async function Main() {
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

  return (
    <Gallery
      applicationData={applicationData}
      snackbar={snackbar}
      fileSelectedHendler={fileSelectedHendler}
      {...props}
    />
  );
};

export default GalleryContainer;
