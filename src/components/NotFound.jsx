import styles from "../styles/NotFound.module.css";
import { Link } from "react-router-dom";
export default function NotFound({ color }) {
  return (
    <div
      style={color === "night" ? { color: "#ffffff" } : { color: "#000000" }}
      className={styles.container}
    >
      <h2>404 Not Found</h2>
      <Link  className={styles.button} style={color === "night" ? { color: "#ffffff" } : { color: "#000000" }} to="/">
        Volver
      </Link>
    </div>
  );
}
