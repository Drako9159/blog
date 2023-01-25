import Card2 from "./post/Card2"
import Card1 from "./post/Card1";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";



export default function Post({ color, setColor, language, setLanguage }) {
  const routeParams = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function restApi() {
      const response = await fetch(`https://backendblog.fly.dev/api/posts/${routeParams.id}`);
      const data = await response.json();
      setPost(data);
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
      <Card2 color={color} language={language} post={post}></Card2>
      
      <Footer
        color={color}
        language={language}
        setLanguage={setLanguage}
      ></Footer>
    </>
  );
}
