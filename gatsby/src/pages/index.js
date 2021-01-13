import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';

import Hero from '../components/Hero';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import RelatedMeetups from '../components/RelatedMeetups';

export const HomeStyles = styled.div`
  background-color: #000;
  padding-bottom: 20px;
  font-family: 'Fira Sans', sans-serif;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #2095f2;
    font-weight: bold;
    font-family: Sanchez, serif;
    margin: 0 0 1em 0;
    padding: 0;
    line-height: 1.3;
  }
  .center-content {
    color: white;
    max-width: 680px;
    padding: 0 5px;
    margin: 0 auto;
    margin-top: 20px;
    text-align: left;
    section {
      margin: 0 0 20px 0;
      background-color: #222;
      border-radius: 8px;
      padding: 20px;
    }
    .table {
      margin-top: 11px;
    }
    .table th {
      background-color: #f9e034;
      color: #343433;
    }
    .center-it {
      text-align: center;
    }
    p {
      padding-bottom: 0.25em;
    }
    .btn,
    .btn:visited {
      font-weight: 400;
      text-transform: uppercase;
      color: #fff;
    }
    .btn:hover {
      opacity: 0.82;
      color: #fff;
    }
    .btn-participate {
      width: 180px;
      text-align: center;
      margin-bottom: 8px;
      white-space: nowrap;
    }
    .hero-buttons .btn:nth-child(1) {
      background-color: #f6e05a;
      color: #333;
    }
    .hero-buttons .btn:nth-child(2) {
      background-color: #0fa513;
    }
    .ways-to-participate dt:nth-child(14n + 1) .btn {
      background-color: #f6e05a;
      color: #333;
    }
    .ways-to-participate dt:nth-child(14n + 3) .btn {
      background-color: #0fa513;
    }
    .ways-to-participate dt:nth-child(14n + 5) .btn {
      background-color: #2095f2;
    }
    .ways-to-participate dt:nth-child(14n + 7) .btn {
      background-color: #6516d9;
    }
    .ways-to-participate dt:nth-child(14n + 9) .btn {
      background-color: #b113ba;
    }
    .ways-to-participate dt:nth-child(14n + 11) .btn {
      background-color: #e81d62;
    }
    .ways-to-participate dt:nth-child(14n + 13) .btn {
      background-color: #fe5621;
    }
    .ways-to-participate {
      padding-bottom: 0;
    }
    dl.ways-to-participate dt {
      float: left;
      clear: both;
      width: 140px;
    }
    dl.ways-to-participate dd {
      height: 90px;
      float: right;
      max-width: 425px;
    }
    dt,
    dd {
      line-height: 1.42857143;
    }
    dd {
      margin-bottom: 0;
    }
    b,
    strong,
    legend,
    label,
    button,
    th,
    dt {
      font-weight: 500;
    }
    a,
    a:hover,
    a:visited {
      color: #2095f2;
    }
    .sisters {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      flex-wrap: wrap;
      margin-top: 20px;
    }
    .sister {
      flex: 100px;
      text-align: center;
      margin-bottom: 20px;
      display: block;
    }
    .sister-img,
    .sister-name {
      display: block;
      margin: 0 auto;
    }
    .sister-name {
      margin-top: 5px;
    }
    .about {
      margin: 0;
    }
    @media (max-width: 665px) {
      dl.ways-to-participate dt {
        float: none;
        text-align: center;
        width: auto;
      }
      dl.ways-to-participate dd {
        float: none;
        width: 100%;
        margin: 10px auto;
        text-align: center;
      }
    }
  }
`;

export default function IndexPage({ data }) {
  const homeData = data.text.nodes[0];
  const seo = data.allSanitySeo.nodes[0];
  return (
    <Layout>
      <SEO seo={seo} />
      <HomeStyles>
        <Hero />
        <div className="center-content">
          <section>
            <h2 id="GetInvolved" className="center-it">
              {homeData.contentHeader}
            </h2>
            <dl className="ways-to-participate clearfix">
              <dt>
                <Link to="/conference" className="btn btn-participate">
                  Conferences
                </Link>
              </dt>
              <dd>
                {homeData.conferencesText}{' '}
                <Link to="/conference">{homeData.conferencesAnchorText}</Link>.
              </dd>

              <dt>
                <a href={homeData.slackUrl} className="btn btn-participate">
                  Join Slack
                </a>
              </dt>
              <dd>
                {homeData.slackText1}{' '}
                <a href={homeData.slackUrl}>{homeData.slackAnchorText}</a>
                {homeData.slackText2}
              </dd>

              <dt>
                <a href={homeData.merchUrl} className="btn btn-participate">
                  Buy Merch
                </a>
              </dt>
              <dd>
                {homeData.merchText}{' '}
                <a href={homeData.merchUrl}>{homeData.merchAnchorText}</a>
              </dd>

              <dt>
                <a href={homeData.emailUrl} className="btn btn-participate">
                  Event Email
                </a>
              </dt>
              <dd>
                {homeData.emailText}
                <a href={homeData.emailUrl}>{homeData.emailAnchorText}</a>.
              </dd>

              <dt>
                <a href={homeData.lehiUrl} className="btn btn-participate">
                  Lehi Meetup
                </a>
              </dt>
              <dd>
                {homeData.lehiText}{' '}
                <a href={homeData.lehiUrl}>{homeData.lehiAnchorText}</a>
              </dd>

              <dt>
                <a href={homeData.SLCUrl} className="btn btn-participate">
                  SLC Meetup
                </a>
              </dt>
              <dd>
                {homeData.SLCText}
                <a href={homeData.SLCUrl}>{homeData.SLCAnchorText}</a>
              </dd>

              <dt>
                <a href={homeData.ogdenUrl} className="btn btn-participate">
                  Ogden Meetup
                </a>
              </dt>
              <dd>
                {homeData.ogdenText}{' '}
                <a href={homeData.ogdenUrl}>{homeData.ogdenAnchorText}</a>
              </dd>

              <dt>
                <a href={homeData.learnersUrl} className="btn btn-participate">
                  Learners Meetup
                </a>
              </dt>
              <dd>
                {homeData.learnersText}{' '}
                <a href={homeData.learnersUrl}>{homeData.learnersAnchorText}</a>
              </dd>

              <dt>
                <a href={homeData.linkedInUrl} className="btn btn-participate">
                  LinkedIn
                </a>
              </dt>
              <dd>
                {homeData.linkedInText}{' '}
                <a href={homeData.linkedInUrl}>LinkedIn Group</a>.
              </dd>

              <dt>
                <a href={homeData.twitterUrl} className="btn btn-participate">
                  Twitter
                </a>
              </dt>
              <dd>
                {homeData.twitterText}{' '}
                <a href={homeData.twitterUrl}>{homeData.twitterAnchorText}</a>.
              </dd>

              <dt>
                <a href={homeData.videosUrl} className="btn btn-participate">
                  Videos
                </a>
              </dt>
              <dd>
                {homeData.videosText}{' '}
                <a href={homeData.videosUrl}>{homeData.videosAnchorText}</a>.
              </dd>
            </dl>
          </section>
          <RelatedMeetups />
          <section>
            <p className="about">
              {homeData.footerText}{' '}
              <a href={homeData.contactEmail}>{homeData.contactAnchorText}</a>
            </p>
          </section>
        </div>
      </HomeStyles>
    </Layout>
  );
}

export const query = graphql`
  query {
    text: allSanityHome {
      nodes {
        SLCText
        SLCUrl
        conferencesText
        conferencesAnchorText
        contentHeader
        emailText
        emailUrl
        learnersText
        learnersUrl
        lehiText
        lehiUrl
        linkedInText
        linkedInUrl
        merchText
        merchUrl
        ogdenText
        ogdenUrl
        slackUrl
        twitterText
        twitterUrl
        videosText
        videosUrl
        slackText1
        slackText2
        slackAnchorText
        SLCAnchorText
        emailAnchorText
        learnersAnchorText
        lehiAnchorText
        linkedInAnchorText
        ogdenAnchorText
        twitterAnchorText
        videosAnchorText
        merchAnchorText
        footerText
        contactAnchorText
        contactEmail
      }
    }
    allSanitySeo(filter: { page: { eq: "Home" } }) {
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
