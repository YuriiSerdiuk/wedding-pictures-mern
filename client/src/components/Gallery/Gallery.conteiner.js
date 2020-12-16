import React from "react";
import { connect } from "react-redux";
import Gallery from "./Gallery";
import apiServise from "../../api";
import { toBase64, delay } from "../../utils/helpers";

const GalleryContainer = (props) => {
  const { auth } = props;

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
        const data = await apiServise.uploadImage(obj);
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

  return <Gallery fileSelectedHendler={fileSelectedHendler} {...props} />;
};

const mapStateToProps = ({ authorisation, snackbar }) => ({
  auth: authorisation,
  snackbar: snackbar,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryContainer);
