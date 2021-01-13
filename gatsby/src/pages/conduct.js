import React from 'react';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const conduct = ({ data }) => {
  const content = data.allSanityCodeOfConduct.nodes[0]._rawContent;
  const seo = data.allSanitySeo.nodes[0];

  return (
    <Layout>
      <SEO seo={seo} />
      <BlockContent className="blockContent center-content" blocks={content} />
    </Layout>
  );
};

export default conduct;

export const pageQuery = graphql`
  query {
    allSanityCodeOfConduct {
      nodes {
        _rawContent(resolveReferences: { maxDepth: 10 })
      }
    }
    allSanitySeo(filter: { page: { eq: "Conduct" } }) {
      nodes {
        title
        description
        fbAppId
        ogUrl
        ogType
        ogSiteName
        ogTitle
        ogDescription
        ogImageUrl {
          asset {
            url
          }
        }
        ogImageType
        ogImageWidth
        ogImageHeight
        twitterTitle
        twitterDescription
        twitterSite
        twitterCreator
        twitterImage {
          asset {
            url
          }
        }
      }
    }
  }
`;
