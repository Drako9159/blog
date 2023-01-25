import styles from "../styles/ChargeAnimation.module.css"

export default function ChargeAnimation({color}){
    return <div className={styles.container}>
        <span className={`${styles.loader} ${color === "night" ? styles.loaderNight : styles.loaderDay}`}></span>
    </div>
}
