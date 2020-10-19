import React from 'react';

import { HomeStyles, CenterContent } from '../styles/indexStyles';
import Layout from '../components/layout';
import SEO from '../components/seo';
import MainContent from '../components/MainContent';
import RelatedMeetups from '../components/RelatedMeetups';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeStyles>
      <CenterContent className="center-content">
        <MainContent />
        <RelatedMeetups />
        <Footer />
      </CenterContent>
    </HomeStyles>
  </Layout>
);

export default IndexPage;
