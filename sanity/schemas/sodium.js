export default {
  name: "sodium",
  type: "object",
  title: "Total Sodium",
  fields: [
    {
      name: "sodium_amount",
      type: "number",
      title: "amount (mg)",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "sodium_dv",
      type: "number",
      title: "DV %",
      validation: (Rule) => Rule.min(0),
    },
  ],
};
