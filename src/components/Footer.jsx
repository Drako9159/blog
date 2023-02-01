import styles from "../styles/Footer.module.css";
import pickGithub from "../assets/icons/footer/github.svg";
import pickLinkedin from "../assets/icons/footer/linkedin.svg";
import pickTwitter from "../assets/icons/footer/twitter.svg";
import pickCountry from "../assets/icons/footer/idioma.png";
import { footerEnglish, footerSpanish } from "../languages/Footer";
import { useParams, useNavigate } from "react-router-dom";
import { useThemeStore } from "../store/theme";

export default function Footer({ language }) {
  const strings = language === "english" ? footerEnglish : footerSpanish;

  const checkRute = useParams();
  const navigate = useNavigate();

  const colorf = useThemeStore((state) => state.colors);
  const themeMode = useThemeStore((state) => state.themeMode);

  function handleLanguage(value) {
    /** Return to blog for reload posts  */
    if (checkRute.id) {
      let returnPage = checkRute.id;
      if (
        returnPage.split("-").pop() === "spanish" ||
        returnPage.split("-").pop() === "english"
      ) {
        navigate("/blog");
      }
    }
    localStorage.setItem("language", `${value}`);

    window.location.reload(false);
  }

  return (
    <>
      <span className={styles.spanDown}></span>
      <div className={`${styles.container}`}>
        <div className={styles.socialMedia}>
          <div className={styles.left}>
            <h2 style={colorf.textEnable}>{strings.name}</h2>
            <h2 style={colorf.textDisable}>{strings.legend}</h2>
            <div
              className={`${styles.icons} ${
                themeMode === "night" ? styles.iconsNight : ""
              }`}
            >
              <a target={"_blank"} href="https://github.com/Drako9159">
                <img alt="github" src={pickGithub}></img>
              </a>
              <a
                target={"_blank"}
                href="https://www.linkedin.com/in/antonio-jaramillo-099a77250"
              >
                <img alt="linkedIn" src={pickLinkedin}></img>
              </a>
              <a target={"_blank"} href="https://twitter.com/Drako9159">
                <img alt="twitter" src={pickTwitter}></img>
              </a>
            </div>
          </div>
          <div className={styles.right}></div>
        </div>

        <div className={styles.info}>
          <p style={colorf.textDisable}  className={styles.laster}>
            {strings.rights}
          </p>
          <div className={styles.country}>
            <select
              onChange={(e) => handleLanguage(e.target.value)}
              value={localStorage.getItem("language")}
              className={`${styles.selector}`}
              style={colorf.layout}
            >
              <option style={colorf.textDisable} value={"spanish"}>
                Spanish
              </option>
              <option style={colorf.textDisable} value={"english"}>
                English
              </option>
            </select>
            <img
              src={pickCountry}
              alt="world-language"
              className={`${
                themeMode === "night" ? styles.pickCountryNight : ""
              }`}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
