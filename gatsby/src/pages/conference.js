import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ConferenceSpeaker from '../components/ConferenceSpeaker';
import ConferenceHero from '../components/ConferenceHero';

const CenterContentStyles = styled.div`
  max-width: 1240px;
  padding: 0 20px;
  margin: 0 auto;
  text-align: left;
`;

const SpeakersSponsorsContainerStyles = styled.section`
  display: flex;
  padding: 50px 0;
  h1,
  h2,
  h3 {
    margin-top: 22px;
    margin-bottom: 11px;
  }
`;

const SpeakerSectionStyles = styled.div`
  width: 600px;
  display: block;
`;

export default function conferencePage({ data }) {
  const conferenceSpeakers = data.allSanitySpeaker.nodes;

  return (
    <Layout>
      <SEO title="Conference" />
      <Nav />
      <ConferenceHero />
      <CenterContentStyles>
        <section className="conference_info">
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
        </section>
        <SpeakersSponsorsContainerStyles>
          <SpeakerSectionStyles>
            <h1>Schedule</h1>
            {conferenceSpeakers.map((speaker) => (
              <ConferenceSpeaker speaker={speaker} key={speaker._id} />
            ))}
          </SpeakerSectionStyles>
          <div>Sponsors</div>
        </SpeakersSponsorsContainerStyles>
      </CenterContentStyles>
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
