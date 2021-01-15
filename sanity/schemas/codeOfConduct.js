export default {
  name: 'codeOfConduct',
  title: 'Code of Conduct',
  type: 'document',
  __experimental_actions: [/* 'create', */ 'update', /* 'delete', */ 'publish'],
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
