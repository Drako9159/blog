import { useErrorStore } from "../store/errors";
import themeLibrary from "../themes/themeLibrary";
import { useThemeStore } from "../store/theme";
import styles from "../styles/NotRequest.module.css";

export default function NotRequest() {
  const getError = useErrorStore.getState().error;
  const theme = useThemeStore((state) => state.themeMode);
  const color = themeLibrary(theme);
  return (
    <div className={styles.container}>
      <h4 style={color.textEnable}>
        {getError.code} {getError.message}
      </h4>
    </div>
  );
}
