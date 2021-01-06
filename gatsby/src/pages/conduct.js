import React from 'react';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const conduct = ({ data }) => {
  const content = data.allSanityCodeOfConduct.nodes[0]._rawContent;
  return (
    <Layout>
      <SEO title="UtahJS Conference Code of Conduct" />
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
  }
`;
