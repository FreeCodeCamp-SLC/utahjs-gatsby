export default {
  name: 'sponsorUs',
  title: 'Sponsor Us',
  type: 'document',
  fields: [
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
};
