import styles from "./Card1.module.css";
import pickArrow from "../../assets/icons/arrowDown.png";
import { Link } from "react-router-dom";

import { card1English, card1Spanish } from "../../languages/Post";

export default function Card1({ color, language }) {
  const strings = language === "english" ? card1English : card1Spanish;
  return (
    <div
      className={`${styles.container} ${
        color === "night" ? styles.containerNight : styles.containerDay
      }`}
    >
      <div className={styles.left}>
        <Link className={styles.button} to="/blog">
          
          <div>
            <img
              style={
                color === "night"
                  ? { filter: "contrast(1%)" }
                  : { filter: "none" }
              }
              src={pickArrow}
            ></img>
          </div>
          <p
            style={
              color === "night" ? { color: "#ffffff" } : { color: "#121213" }
            }
          >
            {strings.text1}
          </p>
        </Link>
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
    </div>
  );
}
