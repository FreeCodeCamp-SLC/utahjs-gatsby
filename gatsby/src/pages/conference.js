import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ConferenceSpeaker from '../components/ConferenceSpeaker';
import ConferenceHero from '../components/ConferenceHero';
import Sponsors from '../components/Sponsors';

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

  return (
    <Layout>
      <SEO title="Conference" />
      <Wrapper className="center-content">
        <ConferenceHero />
        <div className="conference-info">
          <h2>9th Annual UtahJS Conference - Online Series</h2>
          <p>
            Due to COVID-19, the 2020 UtahJS Conference will be an online
            series.
          </p>
          <p>
            Rather than an all-day conference, we will be hosting four lunch
            hour presentations.
          </p>
          <p>
            As always, we price tickets to cover our costs. This year, $20
            includes admission to all 4 presentations! Thanks for supporting the
            UtahJS Community.
          </p>
          <p>
            We are using the new and very slick Vi.to platform to stream the
            presentation and host a Q&amp;A session afterward. You can chat with
            speakers and attendees and ask questions before, during and after
            the presentations.
          </p>
          <p>
            We are super excited to hear these speakers and hope you will join
            us!
          </p>
        </div>
        <div className="speaker-sponsor-container">
          <div className="speaker-section">
            <h2>Schedule</h2>
            {conferenceSpeakers.map((speaker) => (
              <ConferenceSpeaker speaker={speaker} key={speaker._id} />
            ))}
          </div>
          <Sponsors />
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
  }
`;
