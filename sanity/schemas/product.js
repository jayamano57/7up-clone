import rating from "./rating";

export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Product Name",
      type: "string",
      description: "Name of the product",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: "100",
      },
    },
    {
      type: "image",
      name: "image",
      title: "Product Image",
    },
    {
      name: "tagline",
      title: "Product Tagline",
      type: "string",
      description: "Tagline of the product",
    },
    {
      name: "rating",
      title: "Product Rating",
      type: "rating",
    },
    {
      name: "buying_details",
      title: "Buying Details",
      type: "buying_details",
    },
    {
      name: "nutrition_facts",
      title: "Nutrition Facts",
      type: "nutrition_facts",
    },
  ],
};
