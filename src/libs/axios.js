import axios from "axios";
import { useAuthStore } from "../store/auth";

const authApi = axios.create({
  //Configuration
  baseURL: "http://localhost:3000/api",
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
    //"x-drako-help": "la mejor oportunidad para aprender es enseñar"
  };
  return config;
});

export default authApi;
