import React, { useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import SEO from '../components/Seo';
import Speaker from '../components/Speaker.js';
import useSpeakerDataLoader from '../hooks/useSpeakerDataLoader.js';

const PageStyles = styled.div`
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .speakers {
    color: #ff9000;
    cursor: pointer;
    font-family: Gothic A1;
  }
  button {
    color: transparent;
    background: transparent;
    border: none;
  }
  .year-chooser {
    padding: 24px 0 8px 0;
    font-weight: bold;
    font-family: Domine, serif;
  }
  .year-choice {
    font-size: 18px;
    color: #888;
    margin: 0 16px;
  }
  .year-choice:hover {
    text-decoration: none;
  }
  .year-choice.current {
    color: black;
  }
  @media (min-width: 980px) {
    .padding {
      padding-top: 40px;
    }
  }
`;

export default function SpeakersPage({ data }) {
  const seo = data.allSanitySeo.nodes[0];
  const speakerList = data.speakerUrls.nodes;
  const [currentYear, setCurrentYear] = useState(speakerList[0]);
  const { data: speakerData, loadingState } = useSpeakerDataLoader(currentYear);

  return (
    <Layout>
      <SEO seo={seo} />
      <PageStyles className="center-content">
        <div className="padding" />
        <div className="year-chooser">
          <span>Year:</span>
          {speakerList.map((list) => (
            <a
              href="#"
              key={list.year}
              className={`year-choice ${list === currentYear ? 'current' : ''}`}
              onClick={() => setCurrentYear(list)}
            >
              {list.year}
            </a>
          ))}
        </div>
        <p>{loadingState}</p>
        {speakerData.map((speaker) => (
          <Speaker key={speaker.id} speaker={speaker} />
        ))}
      </PageStyles>
    </Layout>
  );
}

export const query = graphql`
  query {
    speakerUrls: allSanitySpeakerUrls(sort: { fields: year, order: DESC }) {
      nodes {
        sessionizeUrl
        year
      }
    }
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
