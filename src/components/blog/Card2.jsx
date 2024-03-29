import styles from "./Card2.module.css";
import { Link } from "react-router-dom";
import ChargeAnimation from "../ChargeAnimation";
import { useThemeStore } from "../../store/theme";
import themeLibrary from "../../themes/themeLibrary";
import NotRequest from "../NotRequest";

export default function Card2({ posts, status }) {
  const theme = useThemeStore((state) => state.themeMode);
  const color = themeLibrary(theme);

  if (status === 0) {
    return <ChargeAnimation></ChargeAnimation>;
  }

  if (status >= 400) {
    return <NotRequest status={status} />;
  }
  

  return (
    <div className={styles.container}>
      {posts.map((e) => {
        return (
          <Link key={e.id} className={styles.Link} to={`/blog/${e.filename}`}>
            <div className={styles.card}>
              <div className={styles.head}>
                <img
                  src={`https://backendblog.fly.dev/api/v2/images/articles${e.image}`}
                  alt={e.title}
                  className={styles.pick}
                  style={{ outlineColor: `${e.color}` }}
                ></img>
              </div>
              <div className={styles.body}>
                <p style={color.textDisable}>
                  {e.createdAt} - {e.readTime}
                </p>
              </div>
              <div style={color.textEnable} className={`${styles.footer}`}>
                <h2>{e.title}</h2>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
