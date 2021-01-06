export default {
  name: 'codeOfConduct',
  title: 'Code of Conduct',
  type: 'document',
  fields: [
    {
      name: 'page',
      title: 'Page',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(50),
    },
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
