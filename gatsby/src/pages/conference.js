import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/Seo';
import ConferenceSpeaker from '../components/ConferenceSpeaker';
import ConferenceHero from '../components/ConferenceHero';
import Sponsors from '../components/ConferenceSponsors';

const Wrapper = styled.div`
  .conference-info {
    h2 {
      font-size: 22px;
      text-align: center;
      margin: 22px 0 11px 0;
    }
    p {
      margin: 0 0 11px 0;
    }
  }
  .speaker-sponsor-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    h2,
    h3 {
      text-align: center;
    }
    h2,
    h3,
    h4 {
      margin-top: 22px;
      margin-bottom: 11px;
    }
  }
  .speaker-section {
    display: flex;
    flex-direction: column;
    margin-bottom: 2em;
    h2 {
      font-size: 22px;
    }
  }
  .schedule-link {
    margin-top: 16px;
  }
  @media (min-width: 980px) {
    .padding {
      padding-top: 40px;
    }
  }

  @media (min-width: 768px) {
    .conference-info {
      h2 {
        font-size: 26px;
        text-align: left;
      }
    }
    .speaker-sponsor-container {
      flex-direction: row;
      gap: 50px;
      h2,
      h3 {
        text-align: left;
      }
      h3 {
        font-size: 22px;
      }
      .speaker-section {
        h2 {
          font-size: 26px;
        }
      }
    }
    .speaker-section {
      width: 55%;
    }
  }
`;

export default function conferencePage({ data }) {
  const conferenceSpeakers = data.allSanitySpeaker.nodes;
  const conferenceContent = data.sanityConferencePage._rawBodyContent;
  const seo = data.allSanitySeo.nodes[0];

  return (
    <Layout>
      <SEO seo={seo} />
      <Wrapper className="center-content">
        <div className="padding" />
        <ConferenceHero />
        <div className="conference-info">
          <BlockContent blocks={conferenceContent} />
        </div>
        <div className="speaker-sponsor-container">
          <div className="speaker-section">
            <h2>Featured Speakers</h2>
            {conferenceSpeakers.length <= 0 ? (
              <h4>
                The speakers are being chosen. The list will be posted once all
                speakers have been chosen and they have accepted.
              </h4>
            ) : (
              conferenceSpeakers.map((speaker) => (
                <ConferenceSpeaker speaker={speaker} key={speaker._id} />
              ))
            )}
            <p className="schedule-link">
              <a href="/schedule">See full schedule &rsaquo;</a>
            </p>
          </div>
          {/* FIXME: uncomment when sponsors are up to date <Sponsors /> */}
        </div>
      </Wrapper>
    </Layout>
  );
}

export const query = graphql`
  query MyQuery {
    allSanitySpeaker(sort: { fields: date_time }) {
      nodes {
        _id
        name
        role
        presentations
        description
        date_time
        duration
        image {
          asset {
            fixed(width: 100, height: 100) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
    sanityConferencePage {
      id
      _rawBodyContent
    }
    allSanitySeo(filter: { page: { eq: "Conference" } }) {
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
