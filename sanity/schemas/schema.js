// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import rating from "./rating";
import buyingDetails from "./buyingDetails";
import retailers from "./retailers";
import nutritionFacts from "./nutritionFacts";
import fat from "./fat";
import sodium from "./sodium";
import carbs from "./carbs";
import product from "./product";
import productType from "./productType";
import recipe from "./recipe";
import recipeOccasions from "./recipeOccasions";
import recipeIngredients from "./recipeIngredients";
import servingMethod from "./servingMethod";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    fat,
    sodium,
    carbs,
    rating,
    buyingDetails,
    retailers,
    nutritionFacts,
    product,
    productType,
    recipeIngredients,
    recipeOccasions,
    recipe,
    servingMethod,
  ]),
});
