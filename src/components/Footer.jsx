import styles from "../styles/Footer.module.css";

export default function Footer({color}) {
  return (
    <div className={styles.container}>
      <h2 style={ color === "black" ? {color: "#cecfda"} : {color: "#3d3e44"}}>All rights reserved © Antonio J. 2022</h2>
    </div>
  );
}
