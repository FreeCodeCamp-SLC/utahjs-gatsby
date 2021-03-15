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
      name: 'heroBackground',
      title: 'Hero Bacground Image',
      type: 'imageWithAlt',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heroImage',
      title: 'Hero Box Image',
      type: 'imageWithAlt',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Hero Button 1 Text',
      name: 'heroButtonOneText',
      type: 'string',
    },
    {
      title: 'Hero Button 1 Internal Link',
      name: 'heroButtonOneInternalLink',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
        }),
    },
    {
      title: 'Hero Button 1 External Link',
      name: 'heroButtonOneExternalLink',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          schema: ['http', 'https'],
        }),
    },
    {
      title: 'Open Hero Button 1 New Tab',
      name: 'heroButtonOneNewTab',
      type: 'boolean',
      description: 'This will open the link in a new tab if turned on.',
    },
    {
      title: 'Hero Button 2 Text',
      name: 'heroButtonTwoText',
      type: 'string',
    },
    {
      title: 'Hero Button 2 Internal Link',
      name: 'heroButtonTwoInternalLink',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
        }),
    },
    {
      title: 'Hero Button 2 External Link',
      name: 'heroButtonTwoExternalLink',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          schema: ['http', 'https'],
        }),
    },
    {
      title: 'Open Hero Button 2 New Tab',
      name: 'heroButtonTwoNewTab',
      type: 'boolean',
      description: 'This will open the link in a new tab if turned on.',
    },
    {
      name: 'bodyContent',
      title: 'Body Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'sponsorTitle',
      title: 'Sponsor Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
