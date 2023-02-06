import Card2 from "../components/post/Card2";
import Card1 from "../components/post/Card1";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticle } from "../api/articles";
import NotRequest from "../components/NotRequest";

export default function Post() {
  const routeParams = useParams();
  const [post, setPost] = useState([]);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    async function getOnePost() {
      try {
        await getArticle(routeParams.id).then((response) => {
          setPost(response.data), setStatus(response.status);
        });
      } catch (error) {
        //console.log(error.response.status);
        setStatus(error.request.status);
      }
    }
    setTimeout(() => {
      getOnePost();
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
      <Card2 post={post} status={status}></Card2>
      <Footer></Footer>
    </>
  );
}
