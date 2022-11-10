import styles from "../styles/Layout.module.css"
import { useState } from "react"

export default function Layout({children, color}){
    return <div className={color === "black" ? styles.containerBlack : styles.containerWhite}>{children}</div>
}