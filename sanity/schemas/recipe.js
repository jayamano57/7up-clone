export default {
  name: "recipe",
  title: "Recipe",
  type: "document",
  fields: [
    {
      name: "recipe_name",
      title: "Recipe Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "recipe_slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "recipe_name",
        maxLength: "100",
      },
    },
    {
      name: "recipe_facebook",
      title: "Recipe Facebook Link",
      type: "string",
    },
    {
      name: "recipe_twitter",
      title: "Recipe Twitter Link",
      type: "string",
    },
    {
      name: "recipe_pinterest",
      title: "Recipe Pinterest Link",
      type: "string",
    },
    {
      name: "recipe_email",
      title: "Recipe Email Link",
      type: "string",
    },
    {
      name: "recipe_type",
      type: "string",
      title: "Recipe Type",
      options: {
        list: ["Drink (21+)", "Nonalcoholic", "Food"],
        layout: "radio",
      },
    },
    {
      name: "recipeOccasions",
      type: "array",
      title: "Recipe Occasions",
      of: [
        {
          type: "reference",
          to: [{ type: "recipeOccasions" }],
        },
      ],
    },
    {
      name: "recipeIngredientsFilter",
      type: "array",
      title: "Recipe Ingredients Filter",
      of: [
        {
          type: "reference",
          to: [{ type: "recipeIngredientsFilter" }],
        },
      ],
    },
    {
      type: "image",
      name: "image",
      title: "Recipe Image",
    },
    {
      type: "image",
      name: "cover_image",
      title: "Recipe Cover Image",
    },
    {
      name: "recipe_ingredients",
      type: "array",
      title: "Recipe Ingredients",
      of: [{ type: "string" }],
    },
    {
      title: "Prep Time",
      name: "prep_time",
      type: "string",
    },
    {
      title: "Cook Time",
      name: "cook_time",
      type: "string",
    },
    {
      title: "Ready In...",
      name: "ready_in",
      type: "string",
    },
    {
      title: "Serving Size",
      name: "serving_size",
      type: "string",
    },
    {
      name: "directions",
      type: "array",
      title: "Directions",
      of: [{ type: "string" }],
    },
    {
      name: "serving_method",
      type: "array",
      title: "Best Served In...",
      of: [
        {
          type: "reference",
          to: [{ type: "serving_method" }],
        },
      ],
    },
    {
      name: "recipe_tips",
      title: "Recipe Tips",
      type: "string",
    },
  ],
};
