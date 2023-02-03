import axios from "../libs/axios";

export async function loginRequest(user, rol) {
  return await axios.post("/login", { user, rol });
}
