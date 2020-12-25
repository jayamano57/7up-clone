export default {
  name: "rating",
  title: "Product Rating",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: "one",
      type: "number",
      title: "1 Star",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "two",
      type: "number",
      title: "2 Stars",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "three",
      type: "number",
      title: "3 Stars",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "four",
      type: "number",
      title: "4 Stars",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "five",
      type: "number",
      title: "5 Stars",
      validation: (Rule) => Rule.min(0),
    },
  ],
};
