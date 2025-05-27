import axios from "axios";
import getENVVariables from "../helpers/getENVVariables";

const { VITE_API_URL } = getENVVariables();

const calendarAPI = axios.create({
  baseURL: VITE_API_URL,
});

// TODO: config interceptor

export default calendarAPI;
