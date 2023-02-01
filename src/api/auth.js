import axios from "../libs/axios";

export async function loginRequest(email, rol) {
  return axios.post("/login", { email, rol });
}
export async function profileRequest() {
  return await axios.get("/posts");
}
