import styles from "../styles/Header.module.css";
import pickDay from "../assets/icons/sunAll.png";
import pickNight from "../assets/icons/sunWhite.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useThemeStore } from "../store/theme";
import { useLanguageStore } from "../store/language";
import languageLibrary from "../languages/languageLibrary";

export default function Header({ activeLink }) {
  const language = useLanguageStore((state) => state.language);
  const [btn, setBtn] = useState(styles.notActive);
  const [isActiveButton, setActiveButton] = useState(styles.burguerNotActive);
  const [animationDay, setAnimationDay] = useState("");
  const [animationNight, setAnimationNight] = useState("");

  const themeMode = useThemeStore((state) => state.themeMode);
 const strings = languageLibrary(language)
  
  const getLibraryColors = useThemeStore((state) => state.libraryColors);
  const setTheme = useThemeStore((state) => state.setTheme);
  const setColors = useThemeStore((state) => state.setColors);
  /////

  //setColors({ colors: getLibraryColors.day })
  //const themeMode = useThemeStore.getState().themeMode;
  const colorf = useThemeStore((state) => state.colors);

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
    if (themeMode === "night") {
      setTheme({ themeMode: "day" });
      localStorage.setItem("themeMode", "day");
      setColors({
        colors: getLibraryColors.day,
      });
    } else {
      setTheme({ themeMode: "night" });
      localStorage.setItem("themeMode", "night");
      setColors({
        colors: getLibraryColors.night,
      });
    }
  }

  return (
    <div className={styles.container}>
      <div
        className={`${styles.title} ${
          themeMode === "night" ? styles.titleNight : styles.titleDay
        }`}
      >
        <Link className={styles.linkTitle} to="/">
          <h3 style={colorf.textEnable}>{strings.header.home}</h3>
        </Link>
      </div>
      <div
        className={`${styles.nav} ${
          themeMode === "night" ? styles.navNight : styles.navDay
        }`}
      >
        <ul>
          <li>
            <Link
              className={`${styles.linksDesktop}  ${
                activeLink === "blog" && themeMode === "night"
                  ? styles.activeLinkNight
                  : activeLink === "blog" && themeMode === "day"
                  ? styles.activeLinkDay
                  : ""
              } `}
              to="/blog"
            >
              <h3>{strings.header.nav[0]}</h3>
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/">
              <h3>{strings.header.nav[1]}</h3>
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/">
              <h3> {strings.header.nav[2]}</h3>
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/">
              <h3>{strings.header.nav[3]}</h3>
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/">
              <h3>{strings.header.nav[4]}</h3>
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/">
              <h3>{strings.header.nav[5]}</h3>
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.linksDesktop}  ${
                activeLink === "about" && themeMode === "night"
                  ? styles.activeLinkNight
                  : activeLink === "about" && themeMode === "day"
                  ? styles.activeLinkDay
                  : ""
              } `}
              to="/about"
            >
              <h3> {strings.header.nav[6]}</h3>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.buttons}>
        <div className={styles.iconDayOrNigth}>
          <div
            className={`${styles.dayOrNight} ${
              themeMode === "night" ? styles.setNight : styles.setDay
            }`}
            onClick={handleTheme}
          >
            <img
              className={
                /////////////////////////////////////
                `${styles.pickDayAnimation} ${
                  themeMode === "night" ? styles.pickDay : animationDay
                }`
              }
              src={pickDay}
            ></img>
            <img
              className={` ${styles.pickNightAnimation} ${
                themeMode === "day" ? styles.pickNight : animationNight
              }`}
              src={pickNight}
            ></img>
          </div>
        </div>

        <div
          className={`${styles.containerBtn} ${
            themeMode === "night"
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
              stroke={colorf.colorLogo.a}
              strokeDasharray={"0,2.09,8.38,30"}
            />
            <use
              xlinkHref={"#circle"}
              stroke={colorf.colorLogo.b}
              strokeDasharray={"0,10.47,8.38,30"}
            />
            <use
              xlinkHref={"#circle"}
              stroke={colorf.colorLogo.c}
              strokeDasharray={"2.09,16.75,6.3"}
            />
          </svg>
          <p
            className={`${styles.logo} ${
              themeMode === "night" ? styles.logoNight : styles.logoDay
            }`}
          >
            a
          </p>
        </div>
      </div>

      <div
        className={`${styles.burguerNav} ${isActiveButton} ${
          themeMode === "night" ? styles.burguerNavNight : styles.burguerNavDay
        }`}
      >
        <ul>
          <li>
            <Link className={styles.linksDesktop}>
              <div className={styles.iconDayOrNigthMobile}>
                <div
                  className={`${styles.dayOrNight} ${
                    themeMode === "night" ? styles.setNight : styles.setDay
                  }`}
                  onClick={handleTheme}
                >
                  <img
                    className={`${styles.pickDayAnimation} ${
                      themeMode === "night" ? styles.pickDay : animationDay
                    }`}
                    src={pickDay}
                  ></img>
                  <img
                    className={` ${styles.pickNightAnimation} ${
                      themeMode === "day" ? styles.pickNight : animationNight
                    }`}
                    src={pickNight}
                  ></img>
                </div>
              </div>
            </Link>
          </li>

          <li>
            <Link className={styles.linksDesktop} to="/blog">
              <h3>{strings.header.nav[0]}</h3>
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/">
              <h3>{strings.header.nav[1]}</h3>
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/">
              <h3> {strings.header.nav[2]}</h3>
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/">
              <h3> {strings.header.nav[3]}</h3>
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/">
              <h3> {strings.header.nav[4]}</h3>
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/">
              <h3> {strings.header.nav[5]}</h3>
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/about">
              <h3>{strings.header.nav[6]}</h3>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
