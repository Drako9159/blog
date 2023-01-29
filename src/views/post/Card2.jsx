import styles from "./Card2.module.css";
import ChargeAnimation from "../../components/ChargeAnimation";

export default function Card1({ color, language, post, status }) {
  if (post.length === 0) {
    return <ChargeAnimation color={color}></ChargeAnimation>;
  }
  if (status === 400) {
    return (
      <div
        style={color === "night" ? { color: "#ffffff" } : { color: "#000000" }}
        className={styles.container}
      >
        NOT POST FOUND
      </div>
    );
  }
  return (
    <div
      className={`${styles.container} ${
        color === "night" ? styles.containerNight : styles.containerDay
      }`}
      dangerouslySetInnerHTML={{ __html: post.data }}
    ></div>
  );
}
