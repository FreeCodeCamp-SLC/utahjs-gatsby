import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';

import Hero from '../components/Hero';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import RelatedMeetups from '../components/RelatedMeetups';
import Footer from '../components/Footer';

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
  main {
    text-align: center;
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
    @media (max-width: 520px) {
      dl.ways-to-participate dt {
        float: none;
        text-align: center;
        width: auto;
      }
    }
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeStyles>
      <Hero />
      <div className="center-content">
        <section>
          <h2 id="GetInvolved">Get involved in JavaScript in Utah</h2>
          <dl className="ways-to-participate clearfix">
            <dt>
              <Link to="/conference" className="btn btn-participate">
                Conferences
              </Link>
            </dt>
            <dd>
              We have a conference every year! Our latest conference details are
              at <Link to="/conference">utahjs.com/conference</Link>.
            </dd>

            <dt>
              <a
                href="https://slack.utahjs.com"
                className="btn btn-participate"
              >
                Join Slack
              </a>
            </dt>
            <dd>
              Join our Slack discussions{' '}
              <a href="https://slack.utahjs.com">here</a>. Ask the community
              JavaScript questions and make announcements.
            </dd>

            <dt>
              <a
                href="https://teespring.com/utahjs-2020-online-series"
                className="btn btn-participate"
              >
                Buy Merch
              </a>
            </dt>
            <dd>
              Now available! Merch on shirts, mugs, socks and more.{' '}
              <a href="https://teespring.com/utahjs-2020-online-series">
                Check out Tee Spring
              </a>
            </dd>

            <dt>
              <a
                href="http://eepurl.com/hcwmDf"
                className="btn btn-participate"
              >
                Event Email
              </a>
            </dt>
            <dd>
              Sign up to receive email about UtahJS conferences and special
              events <a href="http://eepurl.com/hcwmDf">here</a>.
            </dd>

            <dt>
              <a
                href="http://www.meetup.com/UtahJS/"
                className="btn btn-participate"
              >
                Lehi Meetup
              </a>
            </dt>
            <dd>
              Join us the first Thursday of every month at Jane in Lehi.{' '}
              <a href="http://www.meetup.com/UtahJS/">Schedule on Meetup.com</a>
            </dd>

            <dt>
              <a
                href="http://www.meetup.com/UtahJS/"
                className="btn btn-participate"
              >
                SLC Meetup
              </a>
            </dt>
            <dd>
              Join us the third Tuesday of every month at O.C. Tanner in Salt
              Lake City.{' '}
              <a href="http://www.meetup.com/UtahJS/">Schedule on Meetup.com</a>
            </dd>

            <dt>
              <a
                href="http://www.meetup.com/UtahJS/"
                className="btn btn-participate"
              >
                Ogden Meetup
              </a>
            </dt>
            <dd>
              Join us the first Thursday of every month at Startup Ogden.{' '}
              <a href="http://www.meetup.com/UtahJS/">Schedule on Meetup.com</a>
            </dd>

            <dt>
              <a
                href="http://www.meetup.com/UtahJS/"
                className="btn btn-participate"
              >
                Learners Meetup
              </a>
            </dt>
            <dd>
              Presentations immediately proceeding the SLC meetup, as well as
              monthly study groups.{' '}
              <a href="http://www.meetup.com/UtahJS/">Schedule on Meetup.com</a>
            </dd>

            <dt>
              <a
                href="https://www.linkedin.com/groups/6635311"
                className="btn btn-participate"
              >
                LinkedIn
              </a>
            </dt>
            <dd>
              Get to know us, connect with us and network with us on our{' '}
              <a href="https://www.linkedin.com/groups/6635311">
                LinkedIn Group
              </a>
              .
            </dd>

            <dt>
              <a
                href="https://twitter.coasdfasdfm/utjs"
                className="btn btn-participate"
              >
                Twitter
              </a>
            </dt>
            <dd>
              Get updates, join the conversation and follow us on{' '}
              <a href="https://twitter.com/utjs">Twitter</a>.
            </dd>

            <dt>
              <a
                href="https://www.youtube.com/channel/UCimy8Fjcw_8XwEDEsI0cKeA"
                className="btn btn-participate"
              >
                Videos
              </a>
            </dt>
            <dd>
              Watch meetup presentations and conference talks on{' '}
              <a href="https://www.youtube.com/channel/UCimy8Fjcw_8XwEDEsI0cKeA">
                YouTube
              </a>
              .
            </dd>
          </dl>
        </section>
        <RelatedMeetups />
        <Footer />
      </div>
    </HomeStyles>
  </Layout>
);

export default IndexPage;
