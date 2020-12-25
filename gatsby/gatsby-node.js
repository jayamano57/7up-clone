exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      recipes: allSanityRecipe {
        nodes {
          _id
          recipe_name
          recipe_slug {
            current
          }
          recipeIngredientsFilter {
            recipeIngredient
          }
          recipeOccasions {
            occasionType
          }
          serving_method {
            serving_method_name
            serving_method_image {
              asset {
                fixed {
                  src
                }
                fluid {
                  src
                }
              }
            }
          }
          recipe_type
          cover_image {
            asset {
              fluid {
                src
              }
            }
          }
          description
          directions
          recipe_email
          recipe_facebook
          recipe_ingredients
          recipe_pinterest
          recipe_tips
          recipe_twitter
          serving_size
        }
      }
    }
  `)
  data.recipes.nodes.forEach((recipe, i, nodes) => {
    const slug = recipe.recipe_slug.current
    const firstSlug = nodes[0].recipe_slug.current
    const lastSlug = nodes[nodes.length - 1].recipe_slug.current
    const prevSlug = nodes[i - 1] ? nodes[i - 1].recipe_slug.current : lastSlug
    const nextSlug = nodes[i + 1] ? nodes[i + 1].recipe_slug.current : firstSlug
    actions.createPage({
      path: `/recipes/${slug}`,
      component: require.resolve(`./src/templates/Recipe.js`),
      context: { slug: slug, prevSlug, nextSlug },
    })
  })
}
