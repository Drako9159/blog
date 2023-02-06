import axios from "axios";
import { useAuthStore } from "../store/auth";

const authApi = axios.create({
  //Configuration
  //DEFAULT PRODUCTION//VITE_URL_PRODUCTION_V2
  baseURL: import.meta.env.VITE_URL_PRODUCTION_V2,
  //timeout: 8000,
  /*headers: {
    Accept: "application/json",
    "x-drako-key": "drakolin",
  },*/
  /*
  headers: {
    //"Access-Control-Allow-Origin": "*",
    //"Access-Control-Allow-Credentials": true,
    Accept: "application/json",
    //"Accept-Language": "es-CL, es"
  },*/
  credentials: "include",
  withCredentials: true,
  //method: "get",
  //responseType: "json",
});

authApi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;

  config.headers = {
    authorization: `Bearer ${token.token}`,
    Accept: "application/json",
    credentials: "include",
    withCredentials: true,
  };
  return config;
});

export default authApi;
