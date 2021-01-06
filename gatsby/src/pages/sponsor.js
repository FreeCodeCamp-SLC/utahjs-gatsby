import React from 'react';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const SponsorPage = ({ data }) => {
  const content = data.allSanitySponsorUs.nodes[0]._rawContent;
  return (
    <Layout>
      <SEO title="Sponsor Us" />
      <BlockContent className="blockContent center-content" blocks={content} />
    </Layout>
  );
};

export default SponsorPage;

export const pageQuery = graphql`
  query {
    allSanitySponsorUs {
      nodes {
        _rawContent(resolveReferences: { maxDepth: 10 })
      }
    }
  }
`;
