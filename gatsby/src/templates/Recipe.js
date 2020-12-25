import React, { useState } from "react"
import Img from "gatsby-image"
import styles from "../styles/pages/_recipe.module.scss"
import PrepTime from "../media/prep-time.webp"
import AgeGate from "../components/AgeGate"
import useForm from "../hooks/useForm"
import { Link } from "gatsby"
import CookTime from "../media/cook-time.webp"
import ReadyIn from "../media/ready-in.webp"
import ServingSize from "../media/serving-size.webp"
import { graphql } from "gatsby"

export default function Recipe({ data: { recipe }, pageContext }) {
  const [over21, setOver21] = useState(
    typeof window !== "undefined" &&
      window !== "undefined" &&
      window.sessionStorage.getItem("over21")
  )
  const [form, changeHandler] = useForm({ age: "" })
  function enterRecipe(e) {
    e.preventDefault()
    const val = parseInt(form.age)
    const date = new Date()
    const year = date.getFullYear()
    const over21 = year - val >= 21
    if (over21) {
      // need this check for when gatsby builds, window is browser only feature
      typeof window !== "undefined" &&
        window !== "undefined" &&
        window.sessionStorage.setItem("over21", true)
      setOver21(true)
    } else {
      alert("Sorry, it doesn't look like you're old enough.")
      setOver21(false)
    }
  }
  return over21 || over21 === "true" ? (
    <div className={styles.recipePage}>
      <Img fluid={recipe.cover_image.asset.fluid} />
      <div className={styles.recipeContentContainer}>
        <div className={styles.contentTopbar}>
          <div className={styles.socialLinks}>
            <a href={recipe.recipe_facebook}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href={recipe.recipe_twitter}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href={recipe.recipe_pinterest}>
              <i className="fab fa-pinterest"></i>
            </a>
            <a href={recipe.recipe_email}>
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <div className={styles.paginationArrows}>
            <Link
              to={`/recipes/${pageContext.prevSlug}`}
              className={styles.prevRecipe}
            >
              <span className={`${styles.arrow} ${styles.prev}`} />
              <span>PREV</span>
            </Link>
            <Link
              to={`/recipes/${pageContext.nextSlug}`}
              className={styles.nextRecipe}
            >
              <span>NEXT</span>
              <span className={`${styles.arrow} ${styles.next}`} />
            </Link>
          </div>
        </div>
        <div className={styles.recipeDetails}>
          <h1 className={styles.recipeName}>{recipe.recipe_name}</h1>
          <hr className="shortHR" />
          <p className={styles.recipeIntro}>{recipe.description}</p>
          <div className={styles.recipeContent}>
            <div className={styles.recipeIngredients}>
              <h2>INGREDIENTS</h2>
              <ul>
                {recipe.recipe_ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
              <hr className="shortHR" />
              <div className={styles.additionalInfo}>
                {recipe.prep_time && (
                  <div>
                    <img src={PrepTime} className={styles.prepImg} />
                    Prep Time: {recipe.prep_time}
                  </div>
                )}
                {recipe.cook_time && (
                  <div>
                    <img src={CookTime} className={styles.cookImg} />
                    Cook Time: {recipe.cook_time}
                  </div>
                )}
                {recipe.ready_in && (
                  <div>
                    <img src={ReadyIn} className={styles.readyImg} />
                    Ready In: {recipe.ready_in}
                  </div>
                )}
                {recipe.serving_size && (
                  <div>
                    <img src={ServingSize} className={styles.servingImg} />
                    Serving Size: {recipe.serving_size}
                  </div>
                )}
              </div>
            </div>
            <div className={styles.recipeDirections}>
              <h2>DIRECTIONS</h2>
              <ol>
                {recipe.directions.map((direction, i) => (
                  <li key={i}>{direction}</li>
                ))}
              </ol>
              {recipe.recipe_type === "Drink (21+)" && (
                <p>Please drink responsibly.</p>
              )}
              {recipe.serving_method.length > 0 && (
                <div className={styles.servingMethod}>
                  <Img
                    fixed={
                      recipe.serving_method[0].serving_method_image.asset.fixed
                    }
                  />
                  <span>
                    Best served in a{" "}
                    {recipe.serving_method[0].serving_method_name}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className={styles.recipeTips}>
            <h1>TIPS FROM 7UP</h1>
            <hr className="shortHR-white" />
            <p>{recipe.recipe_tips}</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <AgeGate changeHandler={changeHandler} enterRecipe={enterRecipe} />
  )
}

export const query = graphql`
  query($slug: String!) {
    recipe: sanityRecipe(recipe_slug: { current: { eq: $slug } }) {
      _id
      cover_image {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      description
      directions
      prep_time
      cook_time
      ready_in
      serving_size
      recipeIngredientsFilter {
        recipeIngredient
      }
      recipeOccasions {
        occasionType
      }
      serving_method {
        serving_method_image {
          asset {
            fixed(width: 30) {
              ...GatsbySanityImageFixed
            }
          }
        }
        serving_method_name
      }
      recipe_email
      recipe_facebook
      recipe_ingredients
      recipe_name
      recipe_pinterest
      recipe_tips
      recipe_twitter
      recipe_type
      serving_size
    }
  }
`
