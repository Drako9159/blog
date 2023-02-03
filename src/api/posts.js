import axios from "../libs/axios";

export async function getPostsSpanish() {
  return await axios.get("/posts/spanish");
}
export async function getPostsEnglish() {
  return await axios.get("/posts/english");
}
export async function getPost(post) {
  return await axios.get(`/posts/${post}`);
}
