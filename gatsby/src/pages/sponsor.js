import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const SponsorPage = () => (
  <Layout>
    <SEO title="Sponsor Us" />
    <div className="center-content">
      <h1>Sponsor Us</h1>
      <p>
        UtahJS is an educational non-profit in Utah that promotes web
        programming in JavaScript for developers and students at all experience
        levels. We are a highly active community of JavaScript enthusiasts who
        want to learn and teach. UtahJS is a 501(c)(3) non-profit organization
        and sponsorship contributions are tax deductible.
      </p>
      <p>
        For more information or to secure a sponsorship, please contact{' '}
        <a href="mailto:crystal@zeroslopeevents.com">Crystal Harvey</a>.
      </p>
    </div>
  </Layout>
);

export default SponsorPage;
