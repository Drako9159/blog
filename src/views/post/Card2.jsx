import styles from "./Card2.module.css";

export default function Card1({ color, language, post }) {
  console.log(post)
  return (
    <div
      className={`${styles.container} ${
        color === "night" ? styles.containerNight : styles.containerDay
      }`}
      dangerouslySetInnerHTML={{ __html: post.data }}
    ></div>
  );
}
