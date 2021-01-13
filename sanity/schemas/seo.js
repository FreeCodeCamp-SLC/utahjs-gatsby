export default {
  name: 'seo',
  title: 'SEO',
  type: 'document',
  fields: [
    {
      name: 'page',
      title: 'Page',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'fbAppId',
      title: 'fb:app_id',
      type: 'string',
    },
    {
      name: 'ogUrl',
      title: 'og:url',
      type: 'string',
    },
    {
      name: 'ogType',
      title: 'og:type',
      type: 'string',
    },
    {
      name: 'ogSiteName',
      title: 'og:site_name',
      type: 'string',
    },
    {
      name: 'ogTitle',
      title: 'og:title',
      type: 'string',
    },
    {
      name: 'ogDescription',
      title: 'og:description',
      type: 'string',
    },
    {
      name: 'ogImageUrl',
      title: 'og:image:url',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'ogImageType',
      title: 'og:image:type',
      type: 'string',
    },
    {
      name: 'ogImageWidth',
      title: 'og:image:width',
      type: 'string',
    },
    {
      name: 'ogImageHeight',
      title: 'og:image:height',
      type: 'string',
    },
    {
      name: 'twitterTitle',
      title: 'twitter:title',
      type: 'string',
    },
    {
      name: 'twitterDescription',
      title: 'twitter:description',
      type: 'string',
    },
    {
      name: 'twitterSite',
      title: 'twitter:site',
      type: 'string',
    },
    {
      name: 'twitterCreator',
      title: 'twitter:creator',
      type: 'string',
    },
    {
      name: 'twitterImage',
      title: 'twitter:image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'page',
    },
  },
};
