export const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result + "");
    reader.onerror = (error) => reject(error);
  });

export const checkSizeInUploadFile = (file, size) =>  file <= size;

export const getLocalStorageParce = (id) => {
  return JSON.parse(localStorage.getItem(id));
};

export const getLocalStorage = (id) => {
  return localStorage.getItem(id);
};

export const setToLocalStorage = (id, data) => {
  return localStorage.setItem(id, JSON.stringify(data));
};

export const delay = (timeDeley) => {
  return new Promise((resolve) => setTimeout(resolve, timeDeley));
};
