import styles from "../styles/Footer.module.css";
import pickGithub from "../assets/icons/footer/github.svg";
import pickLinkedin from "../assets/icons/footer/linkedin.svg";
import pickTwitter from "../assets/icons/footer/twitter.svg";
import pickCountry from "../assets/icons/footer/idioma.png";
import { footerEnglish, footerSpanish } from "../languages/Footer";

export default function Footer({ color, language }) {
  const strings = language === "english" ? footerEnglish : footerSpanish;

  function handleLanguage(value) {
    localStorage.setItem("language", `${value}`)
    window.location.reload(false)
  }
  console.log(language)
  return (
    <div
      className={`${styles.container} ${
        color === "night" ? styles.containerNight : styles.containerDay
      }`}
    >
      <div className={styles.socialMedia}>
        <div className={styles.left}>
          <h2 className={color === "night" ? styles.nameNight : styles.nameDay}>
            {strings.name}
          </h2>
          <h2>{strings.legend}</h2>
          <div
            className={`${styles.icons} ${
              color === "night" ? styles.iconsNight : ""
            }`}
          >
            <a target={"_blank"} href="https://github.com/Drako9159">
              <img src={pickGithub}></img>
            </a>
            <a
              target={"_blank"}
              href="https://www.linkedin.com/in/antonio-jaramillo-099a77250"
            >
              <img src={pickLinkedin}></img>
            </a>
            <a target={"_blank"} href="https://twitter.com/Drako9159">
              <img src={pickTwitter}></img>
            </a>
          </div>
        </div>
        <div className={styles.right}></div>
      </div>

      <div className={styles.info}>
        <h2 className={styles.laster}>{strings.rights}</h2>
        <div className={styles.country}>
          <select onChange={(e) => handleLanguage(e.target.value)}
          value={localStorage.getItem("language")}
            className={`${styles.selector} ${
              color === "night" ? styles.selectorNight : styles.selectorDay
            }`}
          >
            <option value={"spanish"}>Spanish</option>
            <option value={"english"}>English</option>
          </select>
          <img
            src={pickCountry}
            className={`${color === "night" ? styles.pickCountryNight : ""}`}
          ></img>
        </div>
      </div>
    </div>
  );
}
