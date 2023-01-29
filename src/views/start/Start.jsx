import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Start.module.css";
import pickCard1Night from "./images/moon.png";
import pickCard1Day from "./images/dino.png";
import arrowDown from "./images/arrowDown.png";
import { startEnglish, startSpanish } from "../../languages/Home";


export default function Start({ color, setColor, language, setLanguage }) {
  const strings = language === "english" ? startEnglish : startSpanish;
  return (
    <>
      <Header color={color} setColor={setColor} language={language}></Header>
      <div className={styles.card1}>
        <div
          className={`${styles.card1Left} ${
            color === "night" ? styles.card1LeftNight : styles.card1LeftDay
          }`}
        >
          <h2>
            {strings.text}
          </h2>
          <Link
            className={`${styles.button1Card1} ${
              color === "night"
                ? styles.button1Card1Night
                : styles.button1Card1Day
            }`}
            to="/"
          >
            Read the blog
          </Link>
          <Link
            className={`${styles.button2Card1} ${
              color === "night"
                ? styles.button2Card1Night
                : styles.button2Card1Day
            }`}
            to="/"
          >
            Take a course
          </Link>

          <Link
            className={`${styles.button3Card1} ${
              color === "night"
                ? styles.button3Card1Night
                : styles.button3Card1Day
            }`}
            to="/"
          >
            <img
              src={arrowDown}
              className={`${styles.arrowDown} ${
                color === "night" ? styles.arrowDownNight : ""
              }`}
              alt="arrow-down"
            ></img>
            Learn more about Antonio.jar
          </Link>
        </div>

        <div className={styles.card1Right}>
          <img
            className={styles.pickCard1}
            src={color === "night" ? pickCard1Night : pickCard1Day}
            alt="fron-img"
          ></img>
        </div>
      </div>

      <Footer
        color={color}
        language={language}
        setLanguage={setLanguage}
      ></Footer>
    </>
  );
}
