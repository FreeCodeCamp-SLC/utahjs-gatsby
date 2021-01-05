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
      name: 'subTitle',
      title: 'Hero Box Sub-Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heroImage',
      title: 'Hero Box Image',
      type: 'imageWithAlt',
    },
    {
      name: 'bodyContent',
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
