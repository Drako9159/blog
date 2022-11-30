import styles from "../styles/Header.module.css";
import pickDay from "../assets/icons/sunAll.png";
import pickNight from "../assets/icons/sunWhite.png";
import { useState } from "react";

export default function Header({ color, setColor }) {
  const [night, setNight] = useState(true);
  const [btn, setBtn] = useState(styles.notActive);
  const [nav, setNav] = useState(styles.navNone);

  function handleClickBurguer(e) {
    if (btn === styles.notActive) {
      setNav(styles.burguerNavBlack);
      setBtn(styles.active);
    } else {
      setNav(styles.navNone);
      setBtn(styles.notActive);
    }
  }

  function handleClick() {
    if (color === "black") {
      setColor("white");
    } else {
      setColor("black");
    }
  }

  return (
    <div
      className={color === "black" ? styles.container : styles.containerWhite}
    >
      <div className={styles.title}>
        <h2>Antonio.jar</h2>
      </div>
      <div className={color === "black" ? styles.nav : styles.navBlack}>
        <ul>
          <li>Blog</li>
          <li>Courses</li>
          <li>Discord</li>
          <li>Chats</li>
          <li>Calls</li>
          <li>Workshops</li>
          <li>About</li>
        </ul>
      </div>
      <div className={styles.buttons}>
        <div className={styles.iconDayOrNigth}>
          <div
            className={color === "black" ? styles.dayOrNight : styles.Night}
            onClick={handleClick}
          >
            <img
              className={
                color === "white" ? styles.pickDay : styles.pickDayAnimation
              }
              src={pickDay}
            ></img>
            <img
              className={
                color === "black" ? styles.pickNight : styles.pickNightAnimation
              }
              src={pickNight}
            ></img>
          </div>
        </div>

        <div className={ color === "black" ? styles.containerBtn : styles.containerBtnDay } onClick={(e) => handleClickBurguer(e)}>
        <div className={`${styles.btn} ${btn}`} >
          <span></span>
          <span></span>
          <span></span>  
        </div>
      </div>
      

        <div className={styles.icon}>
          <div className={styles.whiteGrad}></div>
        </div>
      </div>
     
      <div className={ nav }>
        <ul>
          <li>Blog</li>
          <li>Courses</li>
          <li>Discord</li>
          <li>Chats</li>
          <li>Calls</li>
          <li>Workshops</li>
          <li>About</li>
        </ul>
      </div>
      
      
    </div>
  );
}
