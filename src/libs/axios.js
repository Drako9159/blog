import axios from "axios";
import { useAuthStore } from "../store/auth";

const authApi = axios.create({
  //Configuration
  baseURL: import.meta.env.VITE_URL_DEV_1,
  //timeout: 8000,
  /*headers: {
    Accept: "application/json",
    "x-drako-key": "drakolin",
  },*/
  /*
  headers: {
    
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Content-Type": "application/json"
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
  };
  return config;
});

export default authApi;
