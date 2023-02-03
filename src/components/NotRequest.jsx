import { useErrorStore } from "../store/errors";
import themeLibrary from "../themes/themeLibrary";
import { useThemeStore } from "../store/theme";
import styles from "../styles/NotRequest.module.css";
import { useNavigate } from "react-router-dom";

export default function NotRequest() {
  const getError = useErrorStore.getState().error;
  const theme = useThemeStore((state) => state.themeMode);
  const color = themeLibrary(theme);

  const navigate = useNavigate();

  function handleReload() {
    navigate("/");
    window.location.reload(false);
  }

  return (
    <div style={color.textEnable} className={styles.container}>
      <h4 style={color.textEnable}>
        {getError.code} {getError.message}
      </h4>
      <button style={color.textDisable} onClick={handleReload}>Refresh Page</button>
    </div>
  );
}
