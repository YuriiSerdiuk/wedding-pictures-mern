// upload uploaded file to the server storage
import {delay, toBase64} from "./helpers";
import apiService from "../api/api";

export const postFiles = (files,auth) => {
  async function delayedLog(item) {
    await delay(100);
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
        await apiService.uploadAudio(obj);
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
  }

 return  processArray(files);
};

