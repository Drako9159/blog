import { useEffect, useState } from "react";
import { getTrending } from "../../api/movies";
import styles from "./Trending.module.css";

export default function Trending() {
  const [page, setPage] = useState(1);
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
      <h2>Trending</h2>
      <div className={styles.trendingContent}>
        {trending.map((e) => {
        return (
          <div className={styles.scroller}>
            <img src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}></img>
            {console.log(e.title)}
            <p>{e.title === undefined ? e.name : e.title}</p>
          </div>
        );
      })}
      </div>
      
    </div>
  );
}
