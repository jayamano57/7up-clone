export default {
  name: "nutrition_facts",
  title: "Nutrition Facts",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: "calories",
      type: "number",
      title: "Calories",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "serving_size",
      type: "number",
      title: "Serving Size (fl oz)",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "fat",
      title: "Fat",
      type: "fat",
    },
    {
      name: "sodium",
      title: "Total Sodium",
      type: "sodium",
    },
    {
      name: "carbs",
      type: "carbs",
      title: "Total Carbs",
    },
    {
      name: "protein",
      type: "number",
      title: "Protein (g)",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "sugar",
      type: "number",
      title: "Sugar (g)",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "ingredients",
      type: "array",
      title: "Ingredients",
      of: [{ type: "string" }],
    },
  ],
};
