import styles from "./Card2.module.css";
import ChargeAnimation from "../../components/ChargeAnimation";

export default function Card1({ color, language, post }) {

  if(post.length === 0){
    return <ChargeAnimation color={color}></ChargeAnimation>
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
