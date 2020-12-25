import React, { useState, useEffect } from "react"
import styles from "../styles/components/_productInfo.module.scss"
import SlideButton from "./SlideButton"
import Img from "gatsby-image"
import walmart from "../media/walmartgrocery_usa.svg"
import amazon from "../media/amazonfresh_usa.svg"
export default function ProductInfo({ featuredProduct }) {
  console.log(featuredProduct)
  function calculateRating() {
    const { one, two, three, four, five } = featuredProduct.rating
    const total = one + two + three + four + five
    const ratingTotal = one * 1 + two * 2 + three * 3 + four * 4 + five * 5
    const average = ratingTotal / total
    const rating = Math.round((average / 5) * 100)
    const outOf5 = ((rating / 100) * 5).toFixed(1)
    return { rating, outOf5, total }
  }

  const { rating, outOf5, total } = calculateRating()
  const [retailerInfo, setRetailerInfo] = useState(true)
  function NutritionRow({ label, unit = "g", amount, dv }) {
    return (
      <tr>
        <td>
          {label} {amount} {unit}
        </td>
        {(dv || dv === 0) && <td>{dv}%</td>}
      </tr>
    )
  }
  return (
    <>
      <div className={styles.productInfoHeader}>
        <Img
          fluid={featuredProduct.image.asset.fluid}
          style={{ width: "80px", height: "127px" }}
          imgStyle={{ objectFit: "contain" }}
        />
        {/* <img
          src={featuredProduct.image.asset.fluid.srcWebp}
          style={{ height: "127px" }}
        /> */}
        <div className={styles.productInfoHeaderContainer}>
          <h2 className={styles.productInfoHeaderName}>
            {featuredProduct.name}
            <span className="period">.</span>
          </h2>
          <div className={styles.productInfoRatings}>
            <div className={styles.starContainer}>
              <span className={styles.stars}>★★★★★</span>
              <span
                className={styles.backgroundStars}
                style={{ width: `${rating}%` }}
              >
                ★★★★★
              </span>
            </div>
            <div className={styles.productInfoRatingStats}>
              <span>{outOf5}</span>
              <span>({total})</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.productInfoSubHeader}>
        <h3>{featuredProduct.name}</h3>
        <p>{featuredProduct.tagline}</p>
      </div>
      {retailerInfo ? (
        <>
          <div className={styles.productRetailerInfo}>
            <form>
              <select name="products" id="products">
                {featuredProduct.buying_details.type.map(option => (
                  <option key={option._id} value={option.name}>
                    {option.name}
                  </option>
                ))}
              </select>
              <div className={styles.retailerOptions}>
                {featuredProduct.buying_details.retailers.walmart && (
                  <a href="https://www.walmart.com/grocery" target="_blank">
                    <img src={walmart} />
                  </a>
                )}
                {featuredProduct.buying_details.retailers.amazon_fresh && (
                  <a
                    href="https://www.amazon.com/alm/storefront?almBrandId=QW1hem9uIEZyZXNo"
                    target="_blank"
                  >
                    <img src={amazon} />
                  </a>
                )}
              </div>
              <p className={styles.callToAction}>
                Click to save in your favorite cart
              </p>
            </form>
          </div>{" "}
        </>
      ) : (
        <div className={styles.productNutritionInfo}>
          <div className={styles.nutritionFacts}>
            <div className={styles.nutritionLeft}>
              <h4>CALORIES</h4>
              <p className={styles.calories}>
                {featuredProduct.nutrition_facts.calories}
              </p>
              <h4>SERVING SIZE</h4>
              <p className={styles.size}>
                {featuredProduct.nutrition_facts.serving_size} fl oz
              </p>
            </div>
            <table className={styles.nutritionRight}>
              <thead>
                <tr>
                  <th>AMOUNT PER SERVING</th>
                  <th>% DV</th>
                </tr>
              </thead>
              <tbody>
                {featuredProduct.nutrition_facts.fat && (
                  <NutritionRow
                    label="Total Fat"
                    unit="g"
                    amount={featuredProduct.nutrition_facts.fat.fat_amount}
                    dv={featuredProduct.nutrition_facts.fat.fat_dv}
                  />
                )}
                {featuredProduct.nutrition_facts.sodium && (
                  <NutritionRow
                    label="Total Sodium"
                    unit="mg"
                    amount={
                      featuredProduct.nutrition_facts.sodium.sodium_amount
                    }
                    dv={featuredProduct.nutrition_facts.sodium.sodium_dv}
                  />
                )}
                {featuredProduct.nutrition_facts.carbs && (
                  <NutritionRow
                    label="Total Carbohydrates"
                    unit="g"
                    amount={featuredProduct.nutrition_facts.carbs.carbs_amount}
                    dv={featuredProduct.nutrition_facts.carbs.carbs_dv}
                  />
                )}
                {featuredProduct.nutrition_facts.sugar && (
                  <NutritionRow
                    label="Sugar"
                    unit="g"
                    amount={featuredProduct.nutrition_facts.sugar}
                  />
                )}
                {(featuredProduct.nutrition_facts.protein === 0 ||
                  featuredProduct.nutrition_facts.protein) && (
                  <NutritionRow
                    label="Protein"
                    unit="g"
                    amount={featuredProduct.nutrition_facts.protein}
                  />
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <SlideButton
        onClick={() => setRetailerInfo(!retailerInfo)}
        text={`${retailerInfo ? "nutrition facts" : "buying details"}`}
      />
    </>
  )
}
