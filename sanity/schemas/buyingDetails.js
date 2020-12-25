export default {
  name: "buying_details",
  title: "Buying Details",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: "type",
      type: "array",
      title: "Product Type",
      of: [
        {
          type: "reference",
          to: [{ type: "product_type" }],
        },
      ],
    },
    {
      name: "retailers",
      title: "Retailers",
      type: "retailers",
    },
  ],
};
