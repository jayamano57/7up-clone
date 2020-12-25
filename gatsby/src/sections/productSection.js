import React, { useRef, createRef, useState, useEffect } from "react"
import ProductInfo from "../components/ProductInfo"
import styles from "../styles/components/_productSection.module.scss"
import InitialProductInfo from "../components/InitialProductInfo"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

export default function ProductSection() {
  const { products } = useStaticQuery(
    graphql`
      query {
        products: allSanityProduct {
          nodes {
            _id
            buying_details {
              retailers {
                walmart
                amazon_fresh
              }
              type {
                name
                _id
              }
            }
            name
            image {
              asset {
                fluid(maxWidth: 186) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            nutrition_facts {
              calories
              carbs {
                carbs_amount
                carbs_dv
              }
              fat {
                fat_amount
                fat_dv
              }
              ingredients
              protein
              serving_size
              sodium {
                sodium_amount
                sodium_dv
              }
              sugar
            }
            rating {
              five
              four
              one
              three
              two
            }
            slug {
              current
            }
            tagline
          }
        }
      }
    `
  )

  const [indexOrder, setIndexOrder] = useState([1, 2, 3, 4])
  const [featuredProduct, setFeaturedProduct] = useState(null)
  const productsRef = useRef(products.nodes.map(() => createRef()))
  function prevProduct(e) {
    const newIndexOrder = []
    let newFeaturedProduct = ""
    indexOrder.forEach((order, i) => {
      const newOrder = order === 4 ? 1 : order + 1
      if (newOrder === 1) {
        let productId = productsRef.current[i].current.id
        const index = products.nodes.findIndex(
          product => product._id === productId
        )
        newFeaturedProduct = products.nodes[index]
      }
      newIndexOrder.push(newOrder)
    })
    setFeaturedProduct(newFeaturedProduct)
    setIndexOrder(newIndexOrder)
  }
  function nextProduct() {
    const newIndexOrder = []
    let newFeaturedProduct = ""
    indexOrder.forEach((order, i) => {
      const newOrder = order === 1 ? 4 : order - 1
      if (newOrder === 1) {
        let productId = productsRef.current[i].current.id
        const index = products.nodes.findIndex(
          product => product._id === productId
        )
        newFeaturedProduct = products.nodes[index]
      }
      newIndexOrder.push(newOrder)
    })
    setFeaturedProduct(newFeaturedProduct)
    setIndexOrder(newIndexOrder)
  }
  return (
    <section
      id="products"
      className={`${styles.productsContainer} ${
        featuredProduct ? styles.featuredProduct : styles.initalPage
      }`}
    >
      <div className={styles.productsCarouselContainer}>
        <ul className={styles.productsCarousel}>
          {products.nodes.map((product, i) => {
            const className = `product${indexOrder[i]}`
            return (
              <li
                ref={productsRef.current[i]}
                id={product._id}
                key={product._id}
                className={`${styles[className]}`}
                data-order={indexOrder[i]}
              >
                <Img
                  fluid={product.image.asset.fluid}
                  style={{
                    overflow: "visible",
                  }}
                  imgStyle={{ height: "auto", width: "100%", marginTop: "80%" }}
                />
              </li>
            )
          })}
          <li>
            <a></a>
          </li>
        </ul>
        <div className={styles.carouselNav}>
          <button onClick={prevProduct} className={styles.carouselNavArrow}>
            &lt;
          </button>
          <button
            onClick={nextProduct}
            className={`${styles.carouselNavArrow} ${styles.next}`}
          >
            &gt;
          </button>
        </div>
      </div>
      <div
        className={`${styles.productInfoContainer} ${
          featuredProduct ? styles.featured : ""
        }`}
      >
        {featuredProduct ? (
          <ProductInfo featuredProduct={featuredProduct} />
        ) : (
          <InitialProductInfo />
        )}
      </div>
    </section>
  )
}

// graphql`
//   query {
//     products: allSanityProduct {
//       nodes {
//         _id
//         buying_details {
//           retailers {
//             walmart
//             amazon_fresh
//           }
//         }
//         name
//         image {
//           asset {
//             fluid(maxWidth: 486) {
//               ...GatsbySanityImageFluid
//             }
//           }
//         }
//         nutrition_facts {
//           calories
//           carbs {
//             carbs_amount
//             carbs_dv
//           }
//           fat {
//             fat_amount
//             fat_dv
//           }
//           ingredients
//           protein
//           serving_size
//           sodium {
//             sodium_amount
//             sodium_dv
//           }
//           sugar
//         }
//         rating {
//           five
//           four
//           one
//           three
//           two
//         }
//         slug {
//           current
//         }
//         tagline
//       }
//     }
//   }
// `
