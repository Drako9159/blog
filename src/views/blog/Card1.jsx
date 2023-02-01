import styles from "./Card1.module.css";
import { card1English, card1Spanish } from "../../languages/Blog";
import { useThemeStore } from "../../store/theme";

export default function Card1({ language }) {

  const colorz = useThemeStore((state) => state.colors)
  const strings = language === "english" ? card1English : card1Spanish;
  return (
    <div
      className={styles.container}
    >
      <div className={styles.left}>
        <h1 style={colorz.textEnable} className={styles.animation1}>
          {strings.text1} <br></br>
        </h1>
        <h1 style={colorz.textDisable} className={styles.animation2}>{strings.text2}</h1>
      </div>
      <div className={styles.right}>
        <div className={styles.logotipo}>
          <h2 style={colorz.textEnable} className={styles.logoHead}>antonio</h2>
          <div style={colorz.textEnable} className={styles.logosSub}>
            <h2>a</h2>
            <h2>a</h2>
            <h2>a</h2>
            <h2>a</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
