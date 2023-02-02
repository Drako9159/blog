import Header from "../components/Header";
import Footer from "../components/Footer";
import Card1 from "./blog/Card1";
import Card2 from "./blog/Card2";
import { useState, useEffect } from "react";
import { getPostsEnglish, getPostsSpanish } from "../api/posts";
import { useErrorStore } from "../store/errors";

export default function Blog({ language, setLanguage }) {
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
          //if (res) setStatus(res.response.reques);
        }
      } catch (error) {
        console.log(error);
        setStatus(error.request.status);
      }
    }
    setTimeout(() => {
      getPosts();
    }, 1500);
  }, []);

  return (
    <>
      <Header activeLink={"blog"} language={language}></Header>
      <Card1 language={language}></Card1>
      <Card2 language={language} posts={posts} status={status}></Card2>
      <Footer language={language} setLanguage={setLanguage}></Footer>
    </>
  );
}
