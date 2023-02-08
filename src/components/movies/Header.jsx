import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
   
        <div className={styles.left}>
          <button>open</button>
          <img alt="logo"></img>
          <input type="text" name="search"></input>
        </div>
        <div className={styles.right}>profile</div>
      
    </div>
  );
}
