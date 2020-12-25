import React from "react"
import styles from "../styles/components/_ageGate.module.scss"

export default function AgeGate({ changeHandler, enterRecipe }) {
  return (
    <div className={styles.ageGate}>
      <h1>HOLD UP.</h1>
      <p>WHAT YEAR WERE YOU BORN?</p>
      <form>
        <label htmlFor="age">YEAR</label>
        <input
          type="text"
          id="age"
          name="age"
          maxLength="4"
          placeholder="YYYY"
          onChange={changeHandler}
          required="required"
        />
        <button type="submit" onClick={enterRecipe}>
          ENTER RECIPES
        </button>
        <p className={styles.warningBlurb}>
          *You must be 21 or older to enjoy. Please drink responsibly.
        </p>
      </form>
    </div>
  )
}
