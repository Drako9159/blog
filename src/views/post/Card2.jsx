import styles from "./Card2.module.css";
import ChargeAnimation from "../../components/ChargeAnimation";
import { useThemeStore } from "../../store/theme";

export default function Card1({ post, status }) {
  const themeMode = useThemeStore((state) => state.themeMode);
  const colorz = useThemeStore((state) => state.colors);

  if (status === 0) {
    return <ChargeAnimation></ChargeAnimation>;
  }
  if (status >= 400) {
    return (
      <div style={colorz.textEnable} className={styles.container}>
        NOT POST FOUND
      </div>
    );
  }
  return (
    <div
      className={`${styles.container} ${
        themeMode === "night" ? styles.containerNight : styles.containerDay
      }`}
      dangerouslySetInnerHTML={{ __html: post.data }}
    ></div>
  );
}
