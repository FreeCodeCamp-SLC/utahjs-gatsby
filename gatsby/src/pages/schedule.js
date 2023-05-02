import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import SEO from '../components/Seo';
import Sponsors from '../components/ConferenceSponsors.js';

const PageStyles = styled.div`
  @media (max-width: 600px) {
    .headings {
      display: block !important;
      text-align: center;
    }
    .sponsors-column {
    }
  }
  .headings {
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    justify-content: space-between;
  }
  h1 {
    padding: 0 40px 0 0;
    margin: 22px 0 0 0;
  }
  .disclaimer {
    text-align: center;
    color: #666;
    margin-top: 2em;
  }
  .sponsors-column {
  }
  /* hide some confusing session elements */
  .sz-day__title,
  .sz-powered-by {
    display: none !important;
  }
  /* remove borders from sections */
  [data-sessionid] .sz-session_card {
    border: none;
  }
  /* track 1: Purple */
  .sz-session.sz-room--33919 .sz-session__card {
    background-color: #7a4bc6 !important;
  }
  /* track 2: Blue */
  .sz-session.sz-room--33920 .sz-session__card {
    background-color: #4b7fc6 !important;
  }
  /* track 3: Green */
  .sz-session.sz-room--33921 .sz-session__card {
    background-color: #35924a !important;
  }
  /* breaks: Black */
  .sz-session.sz-session--service .sz-session__card {
    background-color: #333 !important;
  }
  /* update some colors */
  .sz-session__title,
  .sz-session__title a {
    color: white !important;
  }
  .sz-session__time {
    color: rgba(255, 255, 255, 0.9) !important;
  }
  .sz-session .sz-session__speakers {
    color: #fdde00 !important;
  }
  .sz-session--service .sz-session__title {
    color: #0d66c4 !important;
  }
  .sz-modal-container .sz-session__title,
  .sz-modal-container .sz-speaker__tagline {
    color: #111 !important;
  }
`;

export default function Schedule({ data }) {
  useEffect(() => {
    // load sessionize embed
    const script = document.createElement('script');
    script.src = 'https://sessionize.com/api/v2/uce3x9i3/view/GridSmart';
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
        <div className="headings">
          <h1>Conference Schedule: Friday, September 15, 2023</h1>
          <h2>
            Location:{' '}
            <a href="https://goo.gl/maps/jami8aBUUy3qVhqKA">
              Megaplex Theaters at Jordan Commons
            </a>
          </h2>
          {/* <div className="sponsors-column">
            <Sponsors display="stacked" />
          </div> */}
        </div>
        <div id="EmbedWrapper" />
        <p className="disclaimer">
          <em>Schedule is subject to change</em>
        </p>
      </PageStyles>
    </Layout>
  );
}

export const query = graphql`
  query {
    allSanitySeo(filter: { page: { eq: "Schedule" } }) {
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
