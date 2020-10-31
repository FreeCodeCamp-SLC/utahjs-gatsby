import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ConferenceHero from '../components/ConferenceHero';

const CenterContentStyles = styled.div`
  max-width: 1240px;
  padding: 0 20px;
  margin: 0 auto;
  text-align: left;
`;

const conferencePage = () => (
  <Layout>
    <SEO title='Conference' />
    <ConferenceHero />
    <CenterContentStyles>
      <div>Hero section placeholder</div>
      <section className="conference_info">
        <h1>9th Annual UtahJS Conference - Online Series</h1>
        <p>
          Due to COVID-19, the 2020 UtahJS Conference will be an online series.
        </p>
        <p>
          Rather than an all-day conference, we will be hosting four lunch hour
          presentations.
        </p>
        <p>
          As always, we price tickets to cover our costs. This year, $20
          includes admission to all 4 presentations! Thanks for supporting the
          UtahJS Community.
        </p>
        <p>
          We are using the new and very slick Vi.to platform to stream the
          presentation and host a Q&amp;A session afterward. You can chat with
          speakers and attendees and ask questions before, during and after the
          presentations.
        </p>
        <p>
          We are super excited to hear these speakers and hope you will join us!
        </p>
      </section>
    </CenterContentStyles>
  </Layout>
);

export default conferencePage;
