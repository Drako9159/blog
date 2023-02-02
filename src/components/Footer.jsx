import styles from "../styles/Footer.module.css";
import pickGithub from "../assets/icons/footer/github.svg";
import pickLinkedin from "../assets/icons/footer/linkedin.svg";
import pickTwitter from "../assets/icons/footer/twitter.svg";
import pickCountry from "../assets/icons/footer/idioma.png";
import { useParams, useNavigate } from "react-router-dom";
import { useThemeStore } from "../store/theme";
import { useLanguageStore } from "../store/language";
import languageLibrary from "../languages/languageLibrary";

export default function Footer() {
  const language = useLanguageStore((state) => state.language);
  const strings = languageLibrary(language)

  const checkRute = useParams();
  const navigate = useNavigate();

  const colorf = useThemeStore((state) => state.colors);
  const themeMode = useThemeStore((state) => state.themeMode);
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  function handleLanguage(value) {
    /** Return to blog for reload posts  */
    if (checkRute.id) {
      let returnPage = checkRute.id;
      if (
        returnPage.split("-").pop() === "spanish" ||
        returnPage.split("-").pop() === "english"
      ) {
        //return to blog
        navigate("/blog");
      }
    }
    localStorage.setItem("language", `${value}`);
    localStorage.setItem("languageMode", `${value}`);
    setLanguage({ language: value });

    // reload page
    window.location.reload(false);
  }
  //console.log(getLanguage);
  return (
    <>
      <span className={styles.spanDown}></span>
      <div className={`${styles.container}`}>
        <div className={styles.socialMedia}>
          <div className={styles.left}>
            <h2 style={colorf.textEnable}>{strings.footer.name}</h2>
            <h2 style={colorf.textDisable}>{strings.footer.legend}</h2>
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
          <p style={colorf.textDisable} className={styles.laster}>
            {strings.footer.rights}
          </p>
          <div className={styles.country}>
            <select
              onChange={(e) => handleLanguage(e.target.value)}
              value={language}
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
