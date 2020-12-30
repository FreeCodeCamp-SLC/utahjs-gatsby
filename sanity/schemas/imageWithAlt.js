export default {
  name: 'imageWithAlt',
  type: 'object',
  title: 'Image',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
    },
  ],
};
