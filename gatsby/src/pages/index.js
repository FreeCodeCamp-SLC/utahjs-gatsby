import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';
import 'bootstrap/dist/css/bootstrap.min.css';

import SEO from '../components/Seo';
import Layout from '../components/layout/Layout';
import Hero from '../components/HomeHero';
import GetInvolved from '../components/HomeGetInvolvedSection';
import RelatedMeetups from '../components/HomeRelatedMeetupsSection';

export const HomeStyles = styled.div`
  background-color: #000;
  padding-bottom: 20px;
  font-family: 'Fira Sans', sans-serif;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #2095f2;
    font-weight: bold;
    font-family: Sanchez, serif;
    margin: 0 0 1em 0;
    padding: 0;
    line-height: 1.3;
  }
  .center-content {
    color: white;
    max-width: 680px;
    padding: 0 5px;
    margin: 0 auto;
    margin-top: 20px;
    text-align: left;
    section {
      margin: 0 0 20px 0;
      background-color: #222;
      border-radius: 8px;
      padding: 20px;
    }
    p {
      padding-bottom: 0.25em;
    }
    .btn,
    .btn:visited {
      font-weight: 400;
      text-transform: uppercase;
      color: #fff;
    }
    .btn:hover {
      opacity: 0.82;
      color: #fff;
    }
    .btn-participate {
      width: 180px;
      font-size: 16px;
      text-align: center;
      margin-bottom: 8px;
      white-space: nowrap;
      padding: 8px 12px;
    }
    .hero-buttons .btn:nth-child(1) {
      background-color: #f6e05a;
      color: #333;
    }
    .hero-buttons .btn:nth-child(2) {
      background-color: #0fa513;
    }
    b,
    strong,
    legend,
    label,
    button,
    th,
    dt {
      font-weight: 500;
    }
  }
  .info > p > a,
  .info > p > a:focus,
  .info > p > a:visited {
    color: #2095f2;
    text-decoration: none;
  }
  .info > p > a:hover {
    text-decoration: underline;
  }
`;

export default function IndexPage({ data }) {
  const homeData = data.allSanityHome.nodes[0];
  const seo = data.allSanitySeo.nodes[0];
  return (
    <Layout>
      <SEO seo={seo} />
      <HomeStyles>
        <Hero />
        <div className="center-content">
          <GetInvolved />
          <RelatedMeetups />
          <section className="info">
            <BlockContent blocks={homeData._rawFooter} />
          </section>
        </div>
      </HomeStyles>
    </Layout>
  );
}

export const query = graphql`
  query {
    allSanityHome {
      nodes {
        _rawFooter(resolveReferences: { maxDepth: 10 })
      }
    }
    allSanitySeo(filter: { page: { eq: "Home" } }) {
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
