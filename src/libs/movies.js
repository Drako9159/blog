import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTliMDFlZDM0NmNhZWY2ZmEzODJhZWM3ZmE3OGFiNSIsInN1YiI6IjYzMzYwOWJjMjU1ZGJhMDA4MTY5ZDZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y5sFjoFAoVU_W17h1dKh1-npovEmh2Lw12Ah9ABYzUQ"

const URI = "https://api.themoviedb.org/3"

const authApi = axios.create({
  baseURL: URI,
 
  
 
});

authApi.interceptors.request.use((config) => {


  config.headers = {
    authorization: `Bearer ${token}`,
   
  };
  return config;
});

export default authApi;
