import React from 'react';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';

import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import SEO from '../components/Seo';

const SponsorWrapper = styled.div`
  @media (min-width: 980px) {
    padding-top: 40px;
  }
  a {
    color: #ff9000;
    text-decoration: none;
  }
  a:hover,
  a:focus,
  a:visited {
    color: #ff9000;
    text-decoration: none;
  }
`;

const SponsorPage = ({ data }) => {
  const content = data.allSanitySponsorUs.nodes[0]._rawContent;
  const seo = data.allSanitySeo.nodes[0];

  return (
    <Layout>
      <SponsorWrapper>
        <SEO seo={seo} />
        <BlockContent
          className="blockContent center-content"
          blocks={content}
        />
      </SponsorWrapper>
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
    allSanitySeo(filter: { page: { eq: "Sponsor Us" } }) {
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
