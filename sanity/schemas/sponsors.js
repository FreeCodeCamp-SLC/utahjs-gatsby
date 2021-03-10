export default {
  name: 'sponsors',
  title: 'Sponsors',
  type: 'document',
  fields: [
    {
      name: 'sponsor',
      title: 'Sponsor',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'altText',
      title: 'alt text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sponsorUrl',
      title: 'sponsor url',
      type: 'url',
    },
  ],
};
