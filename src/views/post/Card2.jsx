import styles from "./Card2.module.css";
import ChargeAnimation from "../../components/ChargeAnimation";
import { useThemeStore } from "../../store/theme";
import themeLibrary from "../../themes/themeLibrary";
import NotRequest from "../../components/NotRequest";

export default function Card1({ post, status }) {
  const theme = useThemeStore((state) => state.themeMode);
  const color = themeLibrary(theme);

  if (status === 0) {
    return <ChargeAnimation></ChargeAnimation>;
  }
  if (status >= 400) {
    return (
      <NotRequest/>
    );
  }
  return (
    <div
      className={`${styles.container} ${
        theme === "night" ? styles.containerNight : styles.containerDay
      }`}
      dangerouslySetInnerHTML={{ __html: post.data }}
    ></div>
  );
}
