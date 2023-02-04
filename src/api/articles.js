import axios from "../libs/axios";

export async function getArticlesSpanish() {
  return await axios.get("/articles?language=spanish");
}
export async function getArticlesEnglish() {
  return await axios.get("/articles?language=english");
}
export async function getArticle(post) {
  return await axios.get(`/articles/${post}`);
}
