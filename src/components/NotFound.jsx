import styles from "../styles/NotFound.module.css";
import { Link } from "react-router-dom";

import { useThemeStore } from "../store/theme";

export default function NotFound() {
  const themeMode = useThemeStore((state) => state.themeMode);
  return (
    <div
      style={
        themeMode === "night" ? { color: "#ffffff" } : { color: "#000000" }
      }
      className={styles.container}
    >
      <h2>404 Not Found</h2>
      <Link
        className={styles.button}
        style={
          themeMode === "night" ? { color: "#ffffff" } : { color: "#000000" }
        }
        to="/"
      >
        Volver
      </Link>
    </div>
  );
}
