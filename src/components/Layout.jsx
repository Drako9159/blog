import styles from "../styles/Layout.module.css"


export default function Layout({children, color}){
    return <div className={color === "night" ? styles.containerBlack : styles.containerWhite}>{children}</div>
}