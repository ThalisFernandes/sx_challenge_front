import axios from "axios";
import { errorInterceptor, resposeInterceptor } from "./interceptors";

const API = axios.create({
  baseURL: "http://localhost:8080",
});

API.interceptors.response.use(
  (response) => resposeInterceptor(response),
  (error) => errorInterceptor(error)
);

export default API;
