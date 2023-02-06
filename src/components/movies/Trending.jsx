import { useEffect, useState } from "react";
import { getTrending } from "../../api/movies";
import styles from "./Trending.module.css";

export default function Trending() {
  const [page, setPage] = useState(3);
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    async function getTrendingTop() {
      await getTrending(page).then((response) =>
        setTrending(response.data.results)
      );
    }
    getTrendingTop();
  }, []);
  console.log(trending);
  return (
    <div className={styles.container}>
      <h1>imagenes</h1>
      {trending.map((e) => {
        return (
          <img src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}></img>
        );
      })}
    </div>
  );
}
