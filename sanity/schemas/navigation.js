export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    {
      name: 'link_text',
      title: 'Link Text',
      type: 'string',
    },
    {
      name: 'internal_link',
      title: 'Internal Link',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
        }),
    },
    {
      name: 'external_link',
      title: 'External Link',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          schema: ['http', 'https'],
        }),
    },
    {
      name: 'new_tab',
      title: 'Open in new tab',
      type: 'boolean',
      description: 'Read https://css-tricks.com/use-target_blank/',
    },
    {
      name: 'no_follow',
      title: 'No follow',
      type: 'boolean',
      description: 'Make this link no follow',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
  ],
  orderings: [
    {
      title: 'Order',
      name: 'Order',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'link_text',
      subtitle: 'order',
    },
    prepare: ({ title, subtitle }) => {
      const order = `Order: ${subtitle}`;
      return {
        title,
        subtitle: order,
      };
    },
  },
};
