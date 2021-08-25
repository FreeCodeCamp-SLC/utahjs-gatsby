import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import SEO from '../components/Seo';

const PageStyles = styled.div`
  @media (min-width: 980px) {
    .padding {
      padding-top: 40px;
    }
  }
  .sz-day__title,
  .sz-powered-by,
  [data-sessionid='f50a26ef-69e9-491f-86fe-1f0442e92c61'] .sz-session__room,
  [data-sessionid='d0f8cf17-0c09-495d-8397-6f4195aaa780'] .sz-session__room,
  [data-sessionid='4a79a880-88a7-4d7c-8e5f-c8cc5be63631'] .sz-session__room {
    display: none !important;
  }
  .sz-session .sz-session__title {
    color: white !important;
  }
  .sz-session__time {
    color: black !important;
  }
  .sz-session .sz-session__speakers {
    color: #fdde00 !important;
  }
  .sz-session--service .sz-session__title {
    color: #0d66c4 !important;
  }
  .sz-session__card {
    background-color: ##5ba4f3 !important;
  }
  .sz-session--service {
    background-color: #b4d7ff;
  }
`;

export default function Schedule({ data }) {
  useEffect(() => {
    // load sessionize embed
    const script = document.createElement('script');
    script.src = 'https://sessionize.com/api/v2/bxy86zel/view/GridSmart';
    script.onload = () => window.sessionize.loader();
    // sessionize embed uses document.write, so we need to override it with
    // code that will insert CSS and html into the right place
    document.write = (html) => {
      const div = document.createElement('div');
      div.innerHTML = html;
      document.querySelector('#EmbedWrapper').appendChild(div);
    };
    document.body.appendChild(script);
  }, []);
  const seo = data.allSanitySeo.nodes[0];

  return (
    <Layout>
      <SEO seo={seo} />
      <PageStyles className="center-content">
        <div className="padding" />
        <h1>Conference Schedule: Friday, October 8, 2021</h1>
        <div id="EmbedWrapper" />
      </PageStyles>
    </Layout>
  );
}

export const query = graphql`
  query {
    allSanitySeo(filter: { page: { eq: "Past Speakers" } }) {
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
