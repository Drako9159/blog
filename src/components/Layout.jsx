import styles from "../styles/Layout.module.css";
import { useThemeStore } from "../store/theme";

export default function Layout({ children }) {
  const colors = useThemeStore((state) => state.colors);
  return (
    <div style={colors.layout} className={styles.container}>
      {children}
    </div>
  );
}
