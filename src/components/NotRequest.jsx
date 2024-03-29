
import themeLibrary from "../themes/themeLibrary";
import { useThemeStore } from "../store/theme";
import styles from "../styles/NotRequest.module.css";
import { useNavigate } from "react-router-dom";

export default function NotRequest({status}) {
  const theme = useThemeStore((state) => state.themeMode);
  const color = themeLibrary(theme);

  const navigate = useNavigate();

  function handleReload() {
    navigate("/");
    window.location.reload(false);
  }

  return (
    <div className={styles.container}>
      <h4 style={color.textEnable}>{status} &nbsp; ¡Oh, no!</h4>
      <button className={`${styles.button} ${theme === "night" ? styles.buttonNight : styles.buttonDay}`} onClick={handleReload}>
        Refresh Page
      </button>
    </div>
  );
}
