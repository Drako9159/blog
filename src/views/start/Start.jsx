import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Start.module.css";
import pickCard1 from "./images/moon.png";
import arrowDown from "./images/arrowDown.png";

export default function Start({ color, setColor }) {
  return (
    <>
      <Header color={color} setColor={setColor}></Header>
      <div className={styles.card1}>
        <div className={`${styles.card1Left} ${color === "night" ? styles.card1LeftNight : styles.card1LeftDay}`}>
          <h2>
            Helping people make the world a better place through quality
            software.
          </h2>
          <Link className={`${styles.button1Card1} ${color === "night" ? styles.button1Card1Night : styles.button1Card1Day}`} to="/">
            Read the blog
          </Link>
          <Link className={`${styles.button2Card1} ${color === "night" ? styles.button2Card1Night : styles.button2Card1Day}`} to="/">
            Take a course
          </Link>

          <Link className={styles.button3Card1} to="/">
            <img src={arrowDown} className={styles.arrowDown}></img>
            Learn more about Antonio
          </Link>
        </div>

        <div className={styles.card1Right}>
          <img className={styles.pickCard1} src={pickCard1}></img>
        </div>
      </div>

      <Footer color={color}></Footer>
    </>
  );
}
