import axios from "axios";
import { API_KEY, SERVER_URL } from '../config/app.constants'

const api = axios.create({
  baseURL: SERVER_URL,
});

api.interceptors.request.use(config => {
  config.url = config.url + '&units=metric&cnt=14&appid=' + API_KEY;
  return config;
});

export default api;
