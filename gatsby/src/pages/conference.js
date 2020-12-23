import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ConferenceSpeaker from '../components/ConferenceSpeaker';
import ConferenceHero from '../components/ConferenceHero';
import Sponsors from '../components/Sponsors';

const ConferenceInfoStyles = styled.section`
  h1 {
    margin: 22px 0 11px 0;
  }
  p {
    margin: 0 0 11px 0;
  }
`;

const SpeakersSponsorsContainerStyles = styled.section`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  h1,
  h2,
  h3 {
    margin-top: 22px;
    margin-bottom: 11px;
  }
  @media all and (min-width: 768px) {
    flex-direction: row;
    gap: 50px;
  }
`;

const SpeakerSectionStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
  @media all and (min-width: 768px) {
    width: 55%;
  }
`;

const SponsorSectionStyles = styled.div`
  justify-content: flex-start;
  @media all and (min-width: 768px) {
    width: 45%;
  }
`;

export default function conferencePage({ data }) {
  const conferenceSpeakers = data.allSanitySpeaker.nodes;

  return (
    <Layout>
      <SEO title="Conference" />
      <div className="center-content">
        <ConferenceHero />
        <ConferenceInfoStyles>
          <h1>9th Annual UtahJS Conference - Online Series</h1>
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
        </ConferenceInfoStyles>
        <SpeakersSponsorsContainerStyles>
          <SpeakerSectionStyles>
            <h1>Schedule</h1>
            {conferenceSpeakers.map((speaker) => (
              <ConferenceSpeaker speaker={speaker} key={speaker._id} />
            ))}
          </SpeakerSectionStyles>
          <SponsorSectionStyles>
            <Sponsors />
          </SponsorSectionStyles>
        </SpeakersSponsorsContainerStyles>
      </div>
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
