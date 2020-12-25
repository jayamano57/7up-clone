import React from "react"
import styles from "../styles/pages/_home.module.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import HomeRecipe from "../components/HomeRecipe"
import featured_1 from "../media/7up-featured.webp"
import featured_1_m from "../media/7up-featured_m.webp"
import featured_1_thumb from "../media/7up-featured-thumb.webp"
import featured_1_thumb_m from "../media/7up_featured-thumb_m.webp"
import featured_2 from "../media/pineapple-7up-side-down-cupcakes.jpg"
import featured_2_m from "../media/pineapple-7up-side-down-cupcakes_m.webp"
import featured_2_thumb from "../media/pineapple-7up-side-down-cupcakes.webp"
import featured_2_thumb_m from "../media/pineapple-7up-side-down-cupcakes_thumb_m.webp"
import featured_3 from "../media/7up-guacamole.jpg"
import featured_3_m from "../media/7up-guacamole_m.jpg"
import featured_3_thumb from "../media/7up-guacamole.webp"
import featured_3_thumb_m from "../media/7up-guacamole_thumb_m.webp"
import featured_4 from "../media/classic-7up-margarita.jpg"
import featured_4_m from "../media/classic-7up-margarita_m.webp"
import featured_4_thumb from "../media/classic-7up-margarita.webp"
import featured_4_thumb_m from "../media/classic-7up-margarita_thumb_m .webp"
import RecipeSection from "../components/RecipeSection"
import ProductSection from "../sections/productSection"
import cocktailSectionImg from "../media/module_cocktail.webp"
import cookingSectionImg from "../media/module_cooking.webp"
import seeAllSectionImg from "../media/module_seeall.jpg"
import Footer from "../sections/footer"

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 1,
  adaptiveHeight: true,
}

export default class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.reinit = this.reinit.bind(this)
  }

  next(e) {
    e.preventDefault()
    e.stopPropagation()
    this.slider.slickNext()
  }
  previous(e) {
    e.preventDefault()
    e.stopPropagation()
    this.slider.slickPrev()
  }
  reinit() {
    this.forceUpdate()
  }
  render() {
    return (
      <div id={styles.body}>
        <section id="recipes">
          <ul>
            <Slider ref={c => (this.slider = c)} {...settings}>
              <HomeRecipe
                image={featured_1}
                imageM={featured_1_m}
                thumb={featured_1_thumb}
                thumbM={featured_1_thumb_m}
                header="Refreshing 7up"
                btnText="buy now"
                reinit={this.reinit}
                prev={this.previous}
                next={this.next}
                videoURL="https://www.youtube.com/embed/9xJqhhqdIyM?autoplay=1"
                key="1"
              />
              <HomeRecipe
                image={featured_2}
                imageM={featured_2_m}
                thumb={featured_2_thumb}
                thumbM={featured_2_thumb_m}
                header={[`Pineapple 7up`, <br key="1" />, `side-down cupcakes`]}
                btnText="Get the recipe"
                reinit={this.reinit}
                prev={this.previous}
                next={this.next}
                videoURL="https://www.youtube.com/embed/B0zYbXeTR20?autoplay=1"
                key="2"
              />
              <HomeRecipe
                image={featured_3}
                imageM={featured_3_m}
                thumb={featured_3_thumb}
                thumbM={featured_3_thumb_m}
                header="7up Guacamole"
                btnText="Get the recipe"
                reinit={this.reinit}
                prev={this.previous}
                next={this.next}
                videoURL="https://www.youtube.com/embed/qkJr8a9gwDU?autoplay=1"
                key="3"
              />
              <HomeRecipe
                image={featured_4}
                imageM={featured_4_m}
                thumb={featured_4_thumb}
                thumbM={featured_4_thumb_m}
                header="7up Margarita"
                reinit={this.reinit}
                subHeader="Make this recipe, and others, using the Digital Bartender on your phone."
                prev={this.previous}
                next={this.next}
                videoURL="https://www.youtube.com/embed/Zwarqv1ymKg?autoplay=1"
                key="4"
              />
            </Slider>
          </ul>
        </section>
        <RecipeSection
          backgroundImage={cocktailSectionImg}
          name="Cocktail Recipes"
          filter="Drink (21+)"
          id="cocktail-recipes"
          color="#fe5887"
        />
        <RecipeSection
          backgroundImage={cookingSectionImg}
          name="Cooking Recipes"
          filter="Food"
          id="cooking-recipes"
          color="#6ba13f"
        />
        <RecipeSection
          backgroundImage={seeAllSectionImg}
          name="See All Recipes"
          id="see-all-recipes"
          color="#c064ac"
        />
        <ProductSection />
        <Footer />
      </div>
    )
  }
}
