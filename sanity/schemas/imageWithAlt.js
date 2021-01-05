export default {
  name: 'imageWithAlt',
  title: 'Image with alt',
  type: 'object',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
    },
  ],
};
