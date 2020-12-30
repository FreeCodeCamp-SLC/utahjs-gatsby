export default {
  name: 'conferencePage',
  title: 'Conference Page',
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
      type: 'imageWithAlt',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'body',
      title: 'Body Content',
      type: 'richText',
    },
    {
      name: 'sponsorTitle',
      title: 'Sponsor Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
