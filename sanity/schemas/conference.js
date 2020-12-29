export default {
  name: 'conference',
  title: 'Conference',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Hero Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Sub-Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heroimage',
      title: 'Hero Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'sponsortitle',
      title: 'Sponsor Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
