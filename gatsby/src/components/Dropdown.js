import React, { useState, useEffect } from "react"
import styles from "../styles/components/_dropdown.module.scss"
export default function Dropdown({
  value,
  show,
  toggle,
  options,
  select,
  selected,
}) {
  //   const [show, setShow] = useState(false)
  //   function toggleDropdown(e) {
  //     setShow(!show)
  //   }
  return (
    <div className={styles.dropdown}>
      <span onClick={toggle} className={styles.value}>
        {value}
      </span>
      <ul className={`${styles.select} ${show ? styles.show : ""}`}>
        {options.map((opt, i) => (
          <li
            key={i + 1}
            onClick={select}
            data-name={opt}
            className={`${styles.option} ${
              opt.toUpperCase() === value.toUpperCase()
                ? `${styles.selected}`
                : ""
            }`}
          >
            {opt}
          </li>
        ))}
      </ul>
    </div>
  )
}
