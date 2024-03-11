import axios from "axios";

export const carsInstance = axios.create({
  baseURL: "https://65aecb4d1dfbae409a758f43.mockapi.io/API",
});

// const setToken = (token) =>
//   (authInstance.defaults.headers.common.Authorization = `Bearer ${token}`);

// const clearToken = () =>
//   (authInstance.defaults.headers.common.Authorization = "");

export const getCars = async () => {
  const response = await carsInstance.get("/adverts");

  return response;
};
