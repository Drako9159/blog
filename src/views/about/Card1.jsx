import styles from "./Card1.module.css";

export default function Card1({ color }) {
  return (
    <div
      className={`${styles.container} ${
        color === "night" ? styles.containerNight : styles.containerDay
      }`}
    >
      <div className={styles.left}>
        <h1>
          Hi, I'm Antonio Jaramillo, I'm a full time educator. <br></br>
          
        </h1>
        <h1>I make the world a
          better place by teaching people like you how to make quality software.</h1>
      </div>
      <div className={styles.right}>
        <div className={styles.logotipo}>
          <h2 className={styles.logoHead}>antonio</h2>
          <div className={styles.logosSub}>
          <h2>a</h2>
          <h2>a</h2>
          <h2>a</h2>
          <h2>a</h2>
        
          </div>
        </div>
      </div>
    </div>
  );
}
