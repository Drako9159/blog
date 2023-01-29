import styles from "./Card2.module.css";
import { Link } from "react-router-dom";
import ChargeAnimation from "../../components/ChargeAnimation";

export default function Card2({ color, posts, status }) {
  
  if(posts.length === 0){
    return <ChargeAnimation color={color}></ChargeAnimation>
  }

  if(status === 400){
    return <div>NOT POST FOUND</div>
  }
  
  
  return (
    <div className={styles.container}>
      {posts.map((e) => {
        return (
          <Link key={e.id} className={`${styles.Link}`} to={`/blog/${e.filename}`}>
            <div  className={styles.card}>
              <div className={styles.head}>
                <img
                  src={`https://backendblog.fly.dev${e.image}`}
                  alt={e.title}
                  className={styles.pick}
                  style={{ outlineColor: `${e.color}`}}
                ></img>
              </div>
              <div className={styles.body}>
                <p>{e.createdAt}</p>
              </div>
              <div
                style={color === "night" ? {color: "#ffffff"} : {color: "#121213"}}
                className={`${styles.footer}`}
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
