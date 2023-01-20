import styles from "./Card1.module.css";
import { card1English, card1Spanish } from "../../languages/Blog";
import { useEffect, useState } from "react";

export default function Card1({ color, language }) {
  const [posts, setPost] = useState({ data: "clean" });

  useEffect(() => {
    async function api() {
      /*
      await fetch("https://backendblog.fly.dev/api/posts").then((response) =>
        response.json().then((data) => setPost(data))
      );*/
      const response = await fetch("https://backendblog.fly.dev/api/posts");
      const data = await response.json();
      setPost({ data: data });
      console.log(data)
    }

    api();
    
  }, []);

  const strings = language === "english" ? card1English : card1Spanish;
  return (
    <div
      className={`${styles.container} ${
        color === "night" ? styles.containerNight : styles.containerDay
      }`}
    >
      <div className={styles.left}>
        <h1 className={styles.animation1}>
          {strings.text1} <br></br>
        </h1>
        <h1 className={styles.animation2}>{strings.text2}</h1>
      </div>
      <div className={styles.right}>
        <div className={styles.logotipo}>
          <h2 className={styles.logoHead}>antonio</h2>
          <div className={styles.logosSub}>
            <h2>a</h2>
            <h2>a</h2>
            <h2>a</h2>
            <h2>a</h2>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
