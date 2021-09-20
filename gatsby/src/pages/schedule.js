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
      transform-origin: center top !important;
    }
  }
  .headings {
    display: flex;
    padding-top: 40px;
    justify-content: space-between;
  }
  h1 {
    padding: 0 40px 0 0;
    margin: 22px 0 0 0;
  }
  .sponsors-column {
    transform: scale(0.75);
    transform-origin: right top;
  }
  /* hide some confusing session elements */
  .sz-day__title,
  .sz-powered-by,
  [data-sessionid='f50a26ef-69e9-491f-86fe-1f0442e92c61'] .sz-session__room,
  [data-sessionid='d0f8cf17-0c09-495d-8397-6f4195aaa780'] .sz-session__room,
  [data-sessionid='4a79a880-88a7-4d7c-8e5f-c8cc5be63631'] .sz-session__room {
    display: none !important;
  }
  /* remove borders from sections */
  [data-sessionid] .sz-session_card {
    border: none;
  }
  /* times and colors */
  /* auditorium: purple */
  [data-sessionid='271921'] .sz-session__card,
  [data-sessionid='268480'] .sz-session__card,
  [data-sessionid='269358'] .sz-session__card,
  [data-sessionid='272085'] .sz-session__card,
  [data-sessionid='268811'] .sz-session__card,
  [data-sessionid='272329'] .sz-session__card,
  [data-sessionid='280182'] .sz-session__card,
  [data-sessionid='269599'] .sz-session__card,
  [data-sessionid='272333'] .sz-session__card,
  [data-sessionid='270052'] .sz-session__card,
  [data-sessionid='7312e754-f287-4d12-877e-a5526f021c88'] .sz-session__card {
    background-color: #9f55ec !important;
  }
  /* breakout: blue */
  [data-sessionid='268373'] .sz-session__card,
  [data-sessionid='282520'] .sz-session__card,
  [data-sessionid='268831'] .sz-session__card,
  [data-sessionid='272070'] .sz-session__card,
  [data-sessionid='272082'] .sz-session__card,
  [data-sessionid='268779'] .sz-session__card,
  [data-sessionid='272304'] .sz-session__card,
  [data-sessionid='268876'] .sz-session__card,
  [data-sessionid='271918'] .sz-session__card {
    background-color: #197be4 !important;
  }
  /* breaks: green */
  [data-sessionid='5963dd06-8cf4-418e-8baf-d64c7ddd5237'] .sz-session__card,
  [data-sessionid='74520220-bf4b-4971-8d4b-2dbe0d121acb'] .sz-session__card,
  [data-sessionid='5bfc9237-e39c-4448-abe7-c70d2230532d'] .sz-session__card,
  [data-sessionid='c7644e09-4f54-43c7-8ce1-5c30619e98fa'] .sz-session__card,
  [data-sessionid='f50a26ef-69e9-491f-86fe-1f0442e92c61'] .sz-session__card,
  [data-sessionid='d0f8cf17-0c09-495d-8397-6f4195aaa780'] .sz-session__card {
    background-color: #3eb353 !important;
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
        <div className="headings">
          <h1>Conference Schedule: Friday, October 8, 2021</h1>
          <div className="sponsors-column">
            <Sponsors />
          </div>
        </div>
        <div id="EmbedWrapper" />
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
