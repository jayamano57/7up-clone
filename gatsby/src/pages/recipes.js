import React, { useState, useEffect } from "react"
import styles from "../styles/pages/_recipes.module.scss"
import Dropdown from "../components/Dropdown"
import shaker from "../media/shaker.webp"
import Shuffle from "shufflejs"
import { getRandomItem } from "../utils"
import RecipeItem from "../components/RecipeItem"
import { graphql } from "gatsby"

export default function Recipes({ location, data }) {
  const recipeTypefilters = ["Drink (21+)", "Nonalcoholic", "Food"]
  const recipeOccasionsFilter = [
    "Date Night",
    "Girls' Night",
    "Game Night",
    "Backyard Party",
    "Brunch",
    "Holiday",
    "Dinner Party",
    "Birthday",
  ]
  /* =====================image grid shuffle========================== */
  const [shuffle, setShuffle] = useState(null)
  const element = React.createRef() // change to useRef hook
  const sizer = React.createRef() // change to useRef hook
  useEffect(() => {
    setShuffle(
      new Shuffle(element.current, {
        itemSelector: ".photo-item",
        sizer: sizer.current,
        filterMode: Shuffle.FilterMode.ALL,
        isCentered: true,
      })
    )
  }, [])
  useEffect(() => {
    shuffle &&
      shuffleRecipes({
        type,
        occasion,
        ingredient,
      })
  }, [shuffle])
  /* =================================================================== */
  const [showType, setShowType] = useState(false)
  const [showOccasion, setShowOccasion] = useState(false)
  const [showIngredient, setShowIngredient] = useState(false)
  const [type, setType] = useState(location.state?.filter || "Any Type")
  const [occasion, setOccasion] = useState("Any Occasion")
  const [ingredient, setIngredient] = useState("Any Ingredient")
  const [wiggle, setWiggle] = useState(false)
  function hideDropdowns() {
    !!showType && setShowType(false)
    !!showOccasion && setShowOccasion(false)
    !!showIngredient && setShowIngredient(false)
  }
  function selectType(e) {
    const type = e.currentTarget.dataset.name
    const filters = {
      type,
      occasion,
      ingredient,
    }
    shuffleRecipes(filters)
    setShowType(false)
  }
  function selectOccasion(e) {
    const occasion = e.currentTarget.dataset.name
    const filters = {
      type,
      occasion,
      ingredient,
    }
    shuffleRecipes(filters)
    setShowOccasion(false)
  }
  function selectIngredient(e) {
    const ingredient = e.currentTarget.dataset.name
    const filters = {
      type,
      occasion,
      ingredient,
    }
    shuffleRecipes(filters)
    setShowIngredient(false)
  }
  function shuffleRecipes({ type, occasion, ingredient }) {
    setWiggle(true)
    setTimeout(() => {
      setWiggle(false)
    }, 500)
    const filter = [type, occasion, ingredient].filter(
      item => !item.includes("Any")
    )
    // if (randomRecipeType !== 'Food') {
    //     filter.push(randomRecipeIngredient);
    // }
    shuffle.filter(filter)
    setType(type)
    setOccasion(occasion)
    setIngredient(ingredient)
  }

  return (
    <div className={styles.recipes}>
      <div className={styles.filters}>
        <div
          className={styles.overlay}
          onClick={() => hideDropdowns()}
          style={{
            display: `${
              showType || showOccasion || showIngredient ? "block" : "none"
            }`,
          }}
        />
        I'M LOOKING FOR{" "}
        <Dropdown
          toggle={() => setShowType(!showType)}
          show={showType}
          options={["Any Type", "Drink (21+)", "Nonalcoholic", "Food"]}
          select={selectType}
          value={type}
        />{" "}
        RECIPES FOR{" "}
        <Dropdown
          toggle={() => setShowOccasion(!showOccasion)}
          show={showOccasion}
          options={[
            "Any Occasion",
            "Birthday",
            "Dinner Party",
            "Holiday",
            "Brunch",
            "Backyard Party",
            "Game Night",
            "Girls' Night",
            "Date Night",
          ]}
          select={selectOccasion}
          value={occasion}
        />{" "}
        MADE WITH{" "}
        <Dropdown
          toggle={() => setShowIngredient(!showIngredient)}
          show={showIngredient}
          options={[
            "Any Ingredient",
            "Gin",
            "Whiskey",
            "Vodka",
            "Rum",
            "Sherbet",
            "Wine",
            "Fruit Juice",
          ]}
          select={selectIngredient}
          value={ingredient}
        />{" "}
        AND 7UP.
      </div>
      <div className={styles.shaker}>
        <button
          onClick={() =>
            shuffleRecipes({
              type: getRandomItem(recipeTypefilters),
              occasion: getRandomItem(recipeOccasionsFilter),
              ingredient: "Any Ingredient",
            })
          }
          className={wiggle ? styles.wiggle : ""}
        >
          <img src={shaker} />
        </button>
        <i className="fas fa-chevron-down"></i>
      </div>
      <div className="container">
        <div className={styles.recipeItemContainer} ref={element}>
          {data.recipes.nodes.map(recipe => (
            <RecipeItem key={recipe._id} {...recipe} />
          ))}
          <div className={styles.sizer} ref={sizer}></div>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    recipes: allSanityRecipe {
      nodes {
        _id
        image {
          asset {
            fluid(maxWidth: 320) {
              ...GatsbySanityImageFluid
            }
          }
        }
        recipeIngredientsFilter {
          recipeIngredient
        }
        recipeOccasions {
          occasionType
        }
        recipe_type
        recipe_name
        recipe_slug {
          current
        }
      }
    }
  }
`
