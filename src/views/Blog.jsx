import Header from "../components/Header";
import Footer from "../components/Footer";
import Card1 from "./blog/Card1";
import Card2 from "./blog/Card2";
import { useState, useEffect } from "react";


export default function Blog({ color, setColor, language, setLanguage }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function restApi() {
      const response = await fetch(
        `https://backendblog.fly.dev/api/posts/${language}`
      );
      const data = await response.json();
      setPosts(data.data);
    }
    setTimeout(() => {
      restApi();
    }, 1500);
    
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
