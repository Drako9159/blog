import styles from "../styles/NotFound.module.css";
import { Link } from "react-router-dom";

import { useThemeStore } from "../store/theme";
import themeLibrary from "../themes/themeLibrary";

export default function NotFound() {
  const theme = useThemeStore((state) => state.themeMode);
  const color = themeLibrary(theme);

  return (
    <div style={color.textDisable} className={styles.container}>
      <h2>404 Not Found</h2>
      <Link className={styles.button} style={color.textDisable} to="/">
        Volver
      </Link>
    </div>
  );
}
