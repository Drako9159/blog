import styles from "./Main.module.css";
import Trending from "./Trending";
export default function Main() {
  return (
    <div className={styles.container}>
      <Trending />
    </div>
  );
}
