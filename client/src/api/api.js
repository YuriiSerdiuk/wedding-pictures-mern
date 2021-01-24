import axios from "axios";
// eslint-disable-next-line
import { URL, DEV_URL, URL_PATHS } from "../constants/api.constants";

class Api {
  instance = axios.create({
    baseURL: URL,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  async get(url, params) {
    const response = await this.instance.get(url, { params });

    return response;
  }
  async post(url, data, options) {
    const response = await this.instance.post(url, data, options);

    return response;
  }

  async put(url, data) {
    const response = await this.instance.put(url, data);

    return response;
  }

  async delete(url, data) {
    const response = await this.instance.delete(url, data);

    return response;
  }

  async getSignUp(params) {
    const data = await this.post(URL_PATHS.SignUp, params);
    console.log("data", data);
    return data;
  }

  async getSignIn(params) {
    const data = await this.post(URL_PATHS.SignIn, params);
    return data;
  }

  async getWakeUp() {
    const data = await this.get(URL_PATHS.Test);
    return data;
  }

  async getPhotos(params) {
    const data = await this.post(URL_PATHS.GetImages, params, {});
    return data;
  }

  async uploadImage(params) {
    const data = await this.post(URL_PATHS.Upload, params, {});
    return data;
  }
  async addNewSlider(params) {
    const data = await this.post(URL_PATHS.slider, params, {});
    return data;
  }

  async getSlider(params) {
    const data = await this.get(URL_PATHS.slider, params, {});
    return data;
  }

  async deleteImage(params) {
    const data = await this.post(URL_PATHS.deleteImage, params, {});
    return data;
  }
}

export default new Api();
