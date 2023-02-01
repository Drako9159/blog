import styles from "../styles/NotFound.module.css";
import { Link } from "react-router-dom";

import { useThemeStore } from "../store/theme";

export default function NotFound() {
  const colorz = useThemeStore((state) => state.colors);
  return (
    <div style={colorz.textDisable} className={styles.container}>
      <h2>404 Not Found</h2>
      <Link className={styles.button} style={colorz.textDisable} to="/">
        Volver
      </Link>
    </div>
  );
}
