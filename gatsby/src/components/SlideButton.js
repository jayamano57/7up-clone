import React from "react"
import styles from "../styles/components/_slideButton.module.scss"
export default function SlideButton({ text, onClick }) {
  return (
    <button onClick={onClick} className={styles.slideButton}>
      {text}
    </button>
  )
}
