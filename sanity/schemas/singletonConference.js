export default {
  name: 'conferencePage',
  title: 'Conference Page',
  type: 'document',
  __experimental_actions: [/* 'create', */ 'update', /* 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Hero Box Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Hero Box Sub-Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heroimage',
      title: 'Hero Box Image',
      type: 'imageWithAlt',
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
