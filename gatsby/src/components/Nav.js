import React, { useState, useEffect } from "react"
import styles from "../styles/components/_nav.module.scss"
import logoSm from "../media/7up-logo-sm.webp"
import logoLg from "../media/7up-logo.webp"
import { Link } from "gatsby"

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  function handleScroll(e) {
    setScrolled(window !== "undefined" && window.scrollY !== 0)
  }
  useEffect(() => {
    window !== "undefined" && window.addEventListener("scroll", handleScroll)
    return () => {
      window !== "undefined" &&
        window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/#recipes" className={styles.logoLink}>
            <img src={scrolled ? logoSm : logoLg} alt="7up logo" />
          </Link>
        </li>
        <li>
          <Link to="/#products">PRODUCTS</Link>
        </li>
        <li>
          <Link to="/recipes">RECIPES</Link>
        </li>
      </ul>
    </nav>
  )
}
