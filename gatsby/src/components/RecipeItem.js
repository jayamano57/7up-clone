import React from "react"
import styles from "../styles/components/_recipeItem.module.scss"
import Img from "gatsby-image"
import { Link } from "gatsby"
export default function RecipeItem({
  recipe_name,
  recipeIngredientsFilter,
  recipeOccasions,
  recipe_slug,
  recipe_type,
  image,
}) {
  const ingredients = recipeIngredientsFilter.map(
    ingredient => `"${ingredient.recipeIngredient}"`
  )
  const occasions = recipeOccasions.map(
    occasion => `"${occasion.occasionType}"`
  )
  const filter = [...ingredients, ...occasions, `"${recipe_type}"`]
  return (
    <div
      data-groups={`[${filter}]`}
      className={`${styles.recipeItem} photo-item`}
    >
      <Link to={`/recipes/${recipe_slug.current}`}>
        <Img fluid={image.asset.fluid} />
        <div className={styles.overlay} />
        <div className={`${styles.recipeLinkBox} ${styles.recipeName}`}>
          {recipe_name}
        </div>
        <div className={`${styles.recipeLinkBox} ${styles.recipeViewRecipe}`}>
          View Recipe →
        </div>
        <div className={styles.recipeNameBox}>
          <span>{recipe_name}</span>
        </div>
      </Link>
    </div>
  )
}
