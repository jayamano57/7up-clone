import React, { useState, useEffect, useRef } from "react"
import styles from "../styles/components/_recipeSection.module.scss"
import { Link } from "gatsby"

export default function RecipeSection({ backgroundImage, name, color, id }) {
  const [position, setPosition] = useState(0)
  const [showHeader, setShowHeader] = useState(false)
  const sectionEl = useRef()
  const headerEl = useRef()
  useEffect(() => {
    window !== "undefined" && window.addEventListener("scroll", handleScroll)
    return () => {
      window !== "undefined" &&
        window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // handles parallax effect
  function handleScroll() {
    const navHeight = 54
    if (!sectionEl.current) return false
    const {
      top: sectionTop,
      bottom: sectionBottom,
    } = sectionEl.current.getBoundingClientRect()
    const { bottom: headerBottom } = headerEl.current.getBoundingClientRect()
    const viewPortHeight = window !== "undefined" && window.innerHeight
    if (sectionTop < viewPortHeight && sectionBottom > navHeight) {
      const inner = viewPortHeight / 2
      const offset = (viewPortHeight - sectionTop) / 2
      setPosition(inner - offset)
    }
    if (
      Math.round(headerBottom) <= viewPortHeight &&
      headerBottom > navHeight
    ) {
      setShowHeader(true)
    }
  }
  return (
    <section
      id={id}
      ref={sectionEl}
      className={styles.recipeSection}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        height: "630px",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPositionY: `${position}px`,
      }}
    >
      <Link to="/recipes" state={{ fromFeed: true }}>
        <div>
          <h2
            className={`${styles.sectionName} ${
              showHeader ? styles.reveal : ""
            }`}
            ref={headerEl}
            style={{
              display: "inline-block",
              textTransform: "uppercase",
              color: "var(--white)",
              transition: "all .25s",
              backgroundImage: `linear-gradient(90deg,transparent,transparent 50%,${color} 0)`,
              backgroundSize: "200%",
            }}
          >
            <span>{name}</span>
            <div
              className={styles.overlay}
              style={{ backgroundColor: color }}
            />
          </h2>
        </div>
      </Link>
    </section>
  )
}
