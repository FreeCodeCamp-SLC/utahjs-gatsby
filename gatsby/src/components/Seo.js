import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ seo }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={`${site.siteMetadata.title} - ${seo.title}`}
      author={site.siteMetadata.author}
      meta={[
        {
          name: `author`,
          content: site.siteMetadata.author,
        },
        {
          name: `description`,
          content: seo.description,
        },
        {
          property: `og:title`,
          content: seo.ogTitle,
        },
        {
          property: `og:description`,
          content: seo.ogDescription,
        },
        {
          property: `og:type`,
          content: seo.ogType,
        },
        {
          property: `og:url`,
          content: seo.ogUrl,
        },
        {
          property: 'og:image',
          content: seo.ogImageUrl.asset.url,
        },
        {
          property: 'og:image:url',
          content: seo.ogImageUrl.asset.url,
        },
        {
          property: 'og:image:width',
          content: seo.ogImageWidth,
        },
        {
          property: 'og:image:height',
          content: seo.ogImageHeight,
        },
        {
          property: `og:image:type`,
          content: seo.ogImageType,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: `twitter:title`,
          content: seo.twitterTitle,
        },
        {
          name: `twitter:site`,
          content: seo.twitterSite,
        },
        {
          name: `twitter:creator`,
          content: seo.twitterAuthor,
        },
        {
          name: `twitter:description`,
          content: seo.twitterDescription,
        },
        {
          name: `twitter:image`,
          content: seo.twitterImage.asset.url,
        },
      ]}
    />
  );
}

export default SEO;
