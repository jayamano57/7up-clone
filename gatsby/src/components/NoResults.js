import React from "react"
import NoResultsTiki from "../media/noresults.webp"
import styles from "../styles/components/_noResults.module.scss"

export default function NoResults() {
  return (
    <div class={styles.noResults}>
      <div class="no-results-image">
        <img src={NoResultsTiki} />
      </div>
      <div class="no-results-copy">
        <p>
          Whoa. That’s a crazy combination!
          <br />
          We don’t have a recipe for that – yet.
          <br />
          For now, try another combo.
        </p>
      </div>
    </div>
  )
}
