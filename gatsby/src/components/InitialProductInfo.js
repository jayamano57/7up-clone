import React from "react"
import styles from "../styles/components/_initialProductInfo.module.scss"
import productGlass from "../media/product_glass.webp"

export default function InitialProductInfo() {
  return (
    <>
      <h1 className={styles.initialHeader}>
        DRINK IT <br />
        STRAIGHT <br />
        UP
        <span className="period">.</span>
      </h1>
      <p className={`${styles.initialSubHeader}`}>
        7UP® products are made with the highest-quality ingredients. Whatever
        the flavor, every can is crisp, clean, and refreshing. Click the cans or
        arrows to explore 7UP flavors.
      </p>
      <img
        className={styles.productGlass}
        src={productGlass}
        alt="product glass"
      />
    </>
  )
}
