export default {
  name: "fat",
  type: "object",
  title: "Total Fat",
  fields: [
    {
      name: "fat_amount",
      type: "number",
      title: "amount (g)",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "fat_dv",
      type: "number",
      title: "DV %",
      validation: (Rule) => Rule.min(0),
    },
  ],
};
