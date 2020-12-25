import React from "react"
import styles from "../styles/components/_dropdown.module.scss"
export default function Dropdown({ value, show, toggle, options, select }) {
  function DropdownListItem({ opt }) {
    return (
      <li
        onClick={select}
        data-name={opt}
        className={`${styles.option} ${
          opt.toUpperCase() === value.toUpperCase() ? `${styles.selected}` : ""
        }`}
      >
        {opt}
      </li>
    )
  }
  return (
    <div className={styles.dropdown}>
      <span onClick={toggle} className={styles.value}>
        {value}
      </span>
      <ul className={`${styles.select} ${show ? styles.show : ""}`}>
        {options.map((opt, i) => (
          <DropdownListItem key={i + 1} opt={opt} />
        ))}
      </ul>
    </div>
  )
}
