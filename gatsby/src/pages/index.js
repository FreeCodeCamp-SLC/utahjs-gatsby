import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import MainContent from '../components/MainContent';
import RelatedMeetups from '../components/RelatedMeetups';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="center-content">
      <MainContent />
      <RelatedMeetups />
    </div>
  </Layout>
);

export default IndexPage;
