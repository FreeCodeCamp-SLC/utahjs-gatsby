import { GiHamburgerMenu as icon } from 'react-icons/gi';

export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon,
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
      description: 'This will open the link in a new tab if turned on.',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description:
        'This will determine the order the links appear in the navbar',
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
