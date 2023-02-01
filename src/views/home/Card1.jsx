import styles from "./Card1.module.css";
import { startEnglish, startSpanish } from "../../languages/Home";
import { Link } from "react-router-dom";
import pickCard1Night from "./images/moon.png";
import pickCard1Day from "./images/dino.png";
import arrowDown from "./images/arrowDown.png";
import { useThemeStore } from "../../store/theme";


export default function Card1({ language }) {
  const themeMode = useThemeStore((state) => state.themeMode)
  const colorz = useThemeStore((state) => state.colors)
  const strings = language === "english" ? startEnglish : startSpanish;
  return (
    <div className={styles.card1}>
      <div

        className={styles.card1Left}
      >
        <h2 style={colorz.textEnable}  className={styles.animation1}>{strings.text}</h2>
        <Link
          className={`${styles.button1Card1} ${
            themeMode === "night"
              ? styles.button1Card1Night
              : styles.button1Card1Day
          }`}
          to="/blog"
        >
          {strings.button1}
        </Link>
        <Link
          className={`${styles.button2Card1} ${
            themeMode === "night"
              ? styles.button2Card1Night
              : styles.button2Card1Day
          }`}
          to="/about"
        >
          {strings.button2}
        </Link>

        <Link
        
          className={`${styles.button3Card1} ${
           themeMode === "night"
              ? styles.button3Card1Night
              : styles.button3Card1Day
          }`}
          to="/about"
        >
          <img
            src={arrowDown}
            className={`${styles.arrowDown} ${
              themeMode === "night" ? styles.arrowDownNight : ""
            }`}
          ></img>
          {strings.button3}
        </Link>
      </div>

      <div className={styles.card1Right}>
        <img
          className={styles.pickCard1}
          src={themeMode === "night" ? pickCard1Night : pickCard1Day}
        ></img>
      </div>
    </div>
  );
}
