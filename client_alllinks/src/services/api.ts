import axios from "axios";

export const api = axios.create({
  baseURL: "https://apiallinks.herokuapp.com/",
});

export default api;
