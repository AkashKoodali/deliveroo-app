export default {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Restaurant name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Image of the restaurant",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude of the Restaurant",
    },
    {
      name: "long",
      type: "number",
      title: "Longnitude of the Restaurant",
    },
    {
      name: "address",
      type: "string",
      title: "Restaurant address",
    },
    {
      name: "rating",
      type: "number",
      title: "Enter the Rating from (1-5 Stars)",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a Value between 1 and 5"),
    },
    {
      name: "type",
      title: "Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      validation: (Rule) => Rule.required(),
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
