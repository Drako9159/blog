import styles from "../styles/Header.module.css";
import pickDay from "../assets/icons/sunAll.png";
import pickNight from "../assets/icons/sunWhite.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ color, setColor }) {
  const [btn, setBtn] = useState(styles.notActive);
  const [isActiveButton, setActiveButton] = useState(styles.burguerNotActive);


  function handleClickBurguer(e) {
    if (isActiveButton === styles.burguerNotActive) {
      setActiveButton(styles.burguerActive);
      setBtn(styles.active);
    } else {
      setActiveButton(styles.burguerNotActive);
      setBtn(styles.notActive);
    }
  }

  function handleClick() {
    if (color === "night") {
      setColor("day");
    } else {
      setColor("night");
    }
  }

  return (
    <div
      className={`${styles.container} ${color === "night" ? styles.containerNight : styles.containerDay}`}
    >
      <div className={`${styles.title} ${color === "night" ? styles.titleNight : styles.titleDay}`}>
        <h2>Antonio.jar</h2>
      </div>
      <div className={`${styles.nav} ${color === "night" ? styles.navNight : styles.navDay}` }>
        <ul>
          <li><Link className={styles.linksDesktop} to="/blog">Blog</Link></li>
          <li><Link className={styles.linksDesktop} to="/blog">Courses</Link></li>
          <li><Link className={styles.linksDesktop} to="/blog">Discord</Link></li>
          <li><Link className={styles.linksDesktop} to="/blog">Chats</Link></li>
          <li><Link className={styles.linksDesktop} to="/blog">Calls</Link></li>
          <li><Link className={styles.linksDesktop} to="/blog">Workshops</Link></li>
          <li><Link className={styles.linksDesktop} to="/blog">About</Link></li>
        </ul>
      </div>
      <div className={styles.buttons}>
        <div className={styles.iconDayOrNigth}>
          <div
            className={`${styles.dayOrNight} ${color === "night" ? styles.setNight : styles.setDay}`}
            onClick={handleClick}
          >
            <img
              className={
                color === "night" ? styles.pickDay : styles.pickDayAnimation
              }
              src={pickDay}
            ></img>
            <img
              className={
                color === "day" ? styles.pickNight : styles.pickNightAnimation
              }
              src={pickNight}
            ></img>
          </div>
        </div>

        <div className={ `${styles.containerBtn} ${color === "night" ? styles.containerBtnNight : styles.containerBtnDay}` } onClick={(e) => handleClickBurguer(e)}>
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
     
      <div className={ `${styles.burguerNav} ${isActiveButton} ${color === "night" ? styles.burguerNavNight : styles.burguerNavDay}` }>
      <ul>
          <li><Link className={styles.linksDesktop} to="/blog">Blog</Link></li>
          <li><Link className={styles.linksDesktop} to="/blog">Courses</Link></li>
          <li><Link className={styles.linksDesktop} to="/blog">Discord</Link></li>
          <li><Link className={styles.linksDesktop} to="/blog">Chats</Link></li>
          <li><Link className={styles.linksDesktop} to="/blog">Calls</Link></li>
          <li><Link className={styles.linksDesktop} to="/blog">Workshops</Link></li>
          <li><Link className={styles.linksDesktop} to="/blog">About</Link></li>
        </ul>
      </div>
      
      
    </div>
  );
}
