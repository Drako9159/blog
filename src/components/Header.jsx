import styles from "../styles/Header.module.css";
import pickDay from "../assets/icons/sunAll.png";
import pickNight from "../assets/icons/sunWhite.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { headerSpanish, headerEnglish } from "../languages/Header";

export default function Header({ color, setColor, activeLink, language }) {
  const [btn, setBtn] = useState(styles.notActive);
  const [isActiveButton, setActiveButton] = useState(styles.burguerNotActive);
  const [animationDay, setAnimationDay] = useState("");
  const [animationNight, setAnimationNight] = useState("");

  const strings = language === "english" ? headerEnglish : headerSpanish;

  function handleClickBurguer(e) {
    if (isActiveButton === styles.burguerNotActive) {
      setActiveButton(styles.burguerActive);
      setBtn(styles.active);
    } else {
      setActiveButton(styles.burguerNotActive);
      setBtn(styles.notActive);
    }
  }

  function handleTheme() {
    setAnimationDay(styles.pickDayAnimationOn);
    setAnimationNight(styles.pickNightAnimationOn);
    if (color === "night") {
      setColor("day");

      localStorage.setItem("theme", "day");
    } else {
      setColor("night");

      localStorage.setItem("theme", "night");
    }
  }

  return (
    <div
      className={`${styles.container} ${
        color === "night" ? styles.containerNight : styles.containerDay
      }`}
    >
      <div
        className={`${styles.title} ${
          color === "night" ? styles.titleNight : styles.titleDay
        }`}
      >
        <Link className={styles.linkTitle} to="/">
          {strings.home}
        </Link>
      </div>
      <div
        className={`${styles.nav} ${
          color === "night" ? styles.navNight : styles.navDay
        }`}
      >
        <ul>
          <li>
            <Link
              className={`${styles.linksDesktop} ${
                activeLink === "blog" ? styles.activeLink : ""
              }`}
              to="/"
            >
              {strings.nav[0]}
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/">
              {strings.nav[1]}
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/">
              {strings.nav[2]}
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/">
              {strings.nav[3]}
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/">
              {strings.nav[4]}
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/">
              {strings.nav[5]}
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.linksDesktop}  ${
                activeLink === "about" && color === "night"
                  ? styles.activeLinkNight
                  : activeLink === "about" && color === "day"
                  ? styles.activeLinkDay
                  : ""
              } `}
              to="/about"
            >
              {strings.nav[6]}
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.buttons}>
        <div className={styles.iconDayOrNigth}>
          <div
            className={`${styles.dayOrNight} ${
              color === "night" ? styles.setNight : styles.setDay
            }`}
            onClick={handleTheme}
          >
            <img
              className={
                /////////////////////////////////////
                `${styles.pickDayAnimation} ${
                  color === "night" ? styles.pickDay : animationDay
                }`
              }
              src={pickDay}
            ></img>
            <img
              className={` ${styles.pickNightAnimation} ${
                color === "day" ? styles.pickNight : animationNight
              }`}
              src={pickNight}
            ></img>
          </div>
        </div>

        <div
          className={`${styles.containerBtn} ${
            color === "night"
              ? styles.containerBtnNight
              : styles.containerBtnDay
          }`}
          onClick={(e) => handleClickBurguer(e)}
        >
          <div className={`${styles.btn} ${btn}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={styles.icon}>
          <svg className={styles.svg} viewBox={"0 0 10 10"}>
            <defs>
              <circle
                id={"circle"}
                cx={5}
                cy={5}
                r="4"
                fill={"transparent"}
                strokeWidth={"0.5"}
              ></circle>
            </defs>

            <use
              xlinkHref={"#circle"}
              stroke={`${color === "night" ? "#FF6708" : "#812567"}`}
              strokeDasharray={"0,2.09,8.38,30"}
            />
            <use
              xlinkHref={"#circle"}
              stroke="#0aa8cfbd"
              strokeDasharray={"0,10.47,8.38,30"}
            />
            <use
              xlinkHref={"#circle"}
              stroke="#df2007bd"
              strokeDasharray={"2.09,16.75,6.3"}
            />
          </svg>
          <p
            className={`${styles.logo} ${
              color === "night" ? styles.logoNight : styles.logoDay
            }`}
          >
            a
          </p>
        </div>
      </div>

      <div
        className={`${styles.burguerNav} ${isActiveButton} ${
          color === "night" ? styles.burguerNavNight : styles.burguerNavDay
        }`}
      >
        <ul>
          <li>
            <Link className={styles.linksDesktop}>
              <div className={styles.iconDayOrNigthMobile}>
                <div
                  className={`${styles.dayOrNight} ${
                    color === "night" ? styles.setNight : styles.setDay
                  }`}
                  onClick={handleTheme}
                >
                  <img
                    className={`${styles.pickDayAnimation} ${
                      color === "night" ? styles.pickDay : animationDay
                    }`}
                    src={pickDay}
                  ></img>
                  <img
                    className={` ${styles.pickNightAnimation} ${
                      color === "day" ? styles.pickNight : animationNight
                    }`}
                    src={pickNight}
                  ></img>
                </div>
              </div>
            </Link>
          </li>

          <li>
            <Link className={styles.linksDesktop} to="/">
              {strings.nav[0]}
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/">
              {strings.nav[1]}
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/">
              {strings.nav[2]}
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/">
              {strings.nav[3]}
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/">
              {strings.nav[4]}
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/">
              {strings.nav[5]}
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/about">
              {strings.nav[6]}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
