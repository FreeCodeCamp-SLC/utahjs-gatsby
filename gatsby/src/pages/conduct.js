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

export const conduct = () => (
  <Layout>
    <SEO title="UtahJS Code of Conduct" />
    <ConferenceHero />
    <CenterContentStyles>
      <div>
        <h1>UtahJS Conference Code of Conduct</h1>
        <p>
          All attendees, speakers, sponsors and volunteers at our conference are
          required to agree with the following code of conduct. Organizers will
          enforce this code throughout the event. We expect cooperation from all
          participants to help ensure a safe environment for everybody.
        </p>
        Need Help? Please contact one of the following organizers: Sunny Leggett
        - 801-675-8304 Ken Snyder - ken@utahjs.com The Quick Version Our
        conference is dedicated to providing a harassment-free conference
        experience for everyone, regardless of gender, gender identity and
        expression, age, sexual orientation, disability, physical appearance,
        body size, race, ethnicity, religion (or lack thereof), or technology
        choices. We do not tolerate harassment of conference participants in any
        form. Sexual language and imagery is not appropriate for any conference
        venue, including talks, workshops, parties, Twitter and other online
        media. Conference participants violating these rules may be sanctioned
        or expelled from the conference without a refund at the discretion of
        the conference organizers. The Less Quick Version Harassment includes
        offensive verbal comments related to gender, gender identity and
        expression, age, sexual orientation, disability, physical appearance,
        body size, race, ethnicity, religion (or lack thereof), sexual images in
        public spaces, deliberate intimidation, stalking, following, harassing
        photography or recording, sustained disruption of talks or other events,
        inappropriate physical contact, and unwelcome sexual attention.
        Participants asked to stop any harassing behavior are expected to comply
        immediately. Sponsors are also subject to the anti-harassment policy. In
        particular, sponsors should not use sexualized images, activities, or
        other material. Booth staff (including volunteers) should not use
        sexualized clothing/uniforms/costumes, or otherwise create a sexualized
        environment. If a participant engages in harassing behavior, the
        conference organizers may take any action they deem appropriate,
        including warning the offender or expulsion from the conference with no
        refund. If you are being harassed, notice that someone else is being
        harassed, or have any other concerns, please contact a member of
        conference staff immediately. Conference staff can be identified as
        they'll be wearing branded t-shirts and badges. Conference staff will be
        happy to help participants contact venue security or local law
        enforcement, provide escorts, or otherwise assist those experiencing
        harassment to feel safe for the duration of the conference. We expect
        participants to follow these rules at conference and workshop venues and
        conference-related social events. This Code of Conduct is adapted from
        Conference Code of Conduct and React Rally Code of Conduct.
      </div>
    </CenterContentStyles>
  </Layout>
);
