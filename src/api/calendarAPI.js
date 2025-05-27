import axios from "axios";
import getENVVariables from "../helpers/getENVVariables";

const { VITE_API_URL } = getENVVariables();

const calendarAPI = axios.create({
  baseURL: VITE_API_URL,
});

calendarAPI.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "x-token": localStorage.getItem("token"),
  };

  return config;
});

export default calendarAPI;
