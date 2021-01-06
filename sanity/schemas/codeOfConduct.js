export default {
  name: 'codeOfConduct',
  title: 'Code of Conduct',
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
