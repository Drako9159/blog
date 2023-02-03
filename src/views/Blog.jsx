import Header from "../components/Header";
import Footer from "../components/Footer";
import Card1 from "./blog/Card1";
import Card2 from "./blog/Card2";
import { useState, useEffect } from "react";
import { getPostsEnglish, getPostsSpanish } from "../api/posts";
import { useLanguageStore } from "../store/language";
import NotRequest from "../components/NotRequest";

export default function Blog() {
  const language = useLanguageStore((state) => state.language);
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    async function getPosts() {
      try {
        if (language === "spanish") {
          await getPostsSpanish().then((response) => {
            setPosts(response.data.data), setStatus(response.status);
          });
        } else if (language === "english") {
          await getPostsEnglish().then((response) => {
            setPosts(response.data.data), setStatus(response.status);
          });
        }
      } catch (error) {
        setStatus(error.request.status);
      }
    }
    setTimeout(() => {
      getPosts();
    }, 1500);
  }, []);

  return status >= 400 ? (
    <>
      <Header activeLink={"blog"}></Header>
      <Card1></Card1>
      <NotRequest status={status}></NotRequest>
      <Footer></Footer>
    </>
  ) : (
    <>
      <Header activeLink={"blog"}></Header>
      <Card1></Card1>
      <Card2 posts={posts} status={status}></Card2>
      <Footer></Footer>
    </>
  );
}
