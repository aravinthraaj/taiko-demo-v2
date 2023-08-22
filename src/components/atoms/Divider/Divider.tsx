import React from "react"
import styles from "./Divider.module.scss"

interface DividerProps {
  variant?: "black" | "white" | "pink"
}
const Divider = ({ variant = "black" }:DividerProps) => {
  return <div className={`${styles.divider} ${styles[variant]}`}></div>
}

export default Divider
