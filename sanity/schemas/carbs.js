export default {
  name: "carbs",
  type: "object",
  title: "Total Carbs",
  fields: [
    {
      name: "carbs_amount",
      type: "number",
      title: "amount (g)",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "carbs_dv",
      type: "number",
      title: "DV %",
      validation: (Rule) => Rule.min(0),
    },
  ],
};
