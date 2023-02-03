import Card2 from "./post/Card2";
import Card1 from "./post/Card1";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPost } from "../api/posts";
import { useErrorStore } from "../store/errors";
import NotRequest from "../components/NotRequest";

export default function Post() {
  const routeParams = useParams();
  const [post, setPost] = useState([]);
  const [status, setStatus] = useState(0);
  const setError = useErrorStore((state) => state.setError);
  const getError = useErrorStore.getState().error;

  useEffect(() => {
    async function getOnePost() {
      try {
        await getPost(routeParams.id).then((response) => {
          setPost(response.data), setStatus(response.status);
        });
      } catch (error) {
        //console.log(error.response.status);
        setStatus(error.request.status);
        setError({
          code: error.response.status,
          message: error.response.statusText,
        });
      }
    }
    setTimeout(() => {
      getOnePost();
    }, 1500);
  }, []);

  return getError.code >= 400 ? (
    <>
      <Header activeLink={"blog"}></Header>
      <Card1></Card1>
      <NotRequest></NotRequest>
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
