import axios from "../libs/axios";

export async function getPostsSpanish() {
  return await axios.get("/posts/sanish");
}
export async function getPostsEnglish() {
  return await axios.get("/posts/eglish");
}
export async function getPost(post) {
  return await axios.get(`/posts/${post}`);
}
