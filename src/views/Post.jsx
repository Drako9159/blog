import Card2 from "./post/Card2";
import Card1 from "./post/Card1";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Post({ language, setLanguage }) {
  const routeParams = useParams();
  const [post, setPost] = useState([]);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    async function restApi() {
      const response = await fetch(
        `https://backendblog.fly.dev/api/posts/${routeParams.id}`
      );
      const data = await response.json();
      setPost(data);
      setStatus(response.status);
    }
    setTimeout(() => {
      restApi();
    }, 1500);
  }, []);

  return (
    <>
      <Header activeLink={"blog"} language={language}></Header>
      <Card1 language={language}></Card1>
      <Card2 language={language} post={post} status={status}></Card2>
      <Footer language={language} setLanguage={setLanguage}></Footer>
    </>
  );
}
