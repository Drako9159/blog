import styles from "./Card2.module.css";
import { Link } from "react-router-dom";
import ChargeAnimation from "../../components/ChargeAnimation";
import { useThemeStore } from "../../store/theme";


export default function Card2({ posts, status }) {
  const colorz = useThemeStore((state) => state.colors);

  if (status === 0) {
    return <ChargeAnimation></ChargeAnimation>;
  }

  if (status >= 400) {
    return (
      <div style={colorz.textEnable} className={styles.container}>
        NOT POSTS FOUND
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {posts.map((e) => {
        return (
          <Link key={e.id} className={styles.Link} to={`/blog/${e.filename}`}>
            <div className={styles.card}>
              <div className={styles.head}>
                <img
                  src={`https://backendblog.fly.dev${e.image}`}
                  alt={e.title}
                  className={styles.pick}
                  style={{ outlineColor: `${e.color}` }}
                ></img>
              </div>
              <div className={styles.body}>
                <p style={colorz.textDisable}>{e.createdAt}</p>
              </div>
              <div style={colorz.textEnable} className={`${styles.footer}`}>
                <h2>{e.title}</h2>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
