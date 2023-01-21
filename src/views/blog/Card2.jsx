import styles from "./Card2.module.css";
import { Link } from "react-router-dom";

export default function Card2({ color, language, posts }) {
  return (
    <div className={styles.container}>
      {posts.map((e) => {
        return (
          <Link className={styles.Link} to="/blog">
            <div key={e.id} className={styles.card}>
              <div className={styles.head}>
                <img
                  src={`https://backendblog.fly.dev${e.image}`}
                  className={styles.pick}
                ></img>
              </div>
              <div className={styles.body}>
                <p>{e.createdAt}</p>
              </div>
              <div
                Style={
                  color === "night" ? "color: #ffffff;" : "color: #121213;"
                }
                className={styles.footer}
              >
                <h2>{e.title}</h2>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
