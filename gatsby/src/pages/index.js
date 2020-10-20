import React from 'react';
import Hero from '../components/Hero'
import Layout from '../components/layout';
import SEO from '../components/seo';
import MainContent from '../components/MainContent';
import RelatedMeetups from '../components/RelatedMeetups';
import Footer from '../components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <div className="center-content">
      <MainContent />
      <RelatedMeetups />
      <Footer />
    </div>
  </Layout>
);

export default IndexPage;