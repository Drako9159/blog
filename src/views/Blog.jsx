import Header from "../components/Header";
import Footer from "../components/Footer";
import Card1 from "./blog/Card1";
import Card2 from "./blog/Card2";
import { useState, useEffect } from "react";

export default function Blog({ language, setLanguage }) {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState(0);

  const KEY = "drako9159@gmail.com";
  const URL = "https://backendblog.fly.dev/api";

  useEffect(() => {
    async function authLogin() {
      const response = await fetch(`${URL}/login`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin", //"same-origin" //,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ user: KEY, rol: "admin" }),
      }).then((response) =>
        setTimeout(() => {
          restApi(response.headers.get("authorization"));
        }, 1500)
      );
    }

    authLogin();

    async function restApi(token) {
      const response = await fetch(`${URL}/posts/${language}`, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setStatus(response.status);
      setPosts(data.data);
    }
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
