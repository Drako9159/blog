import axios from "../libs/axios";

export async function loginRequest(email, password) {
  return axios.post("/login", { email, password });
}
export async function profileRequest() {
  return await axios.get("/profile");
}
