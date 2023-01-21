import Header from "../components/Header";
import Footer from "../components/Footer";
import Card1 from "./blog/Card1";
import Card2 from "./blog/Card2";

import { useState, useEffect } from "react";
import { getPostsRequest } from "../libs/axios";


export default function Blog({ color, setColor, language, setLanguage }) {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function restApi() {
      const response = await fetch(`https://backendblog.fly.dev/api/posts`);
      const data = await response.json();
      setPosts(data.data);
    }
    restApi();
  }, []);
  
  return (
    <>
      <Header
        color={color}
        setColor={setColor}
        activeLink={"blog"}
        language={language}
      ></Header>
      <Card1 color={color} language={language}></Card1>
      <Card2 color={color} language={language} posts={posts}></Card2>
      <Footer
        color={color}
        language={language}
        setLanguage={setLanguage}
      ></Footer>
    </>
  );
}
