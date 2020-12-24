import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import heroBackgr from '../images/arches-2020-hero.jpg';

// styles

const Hero = styled.section`
  background: url(${heroBackgr}) no-repeat 50% 50% / cover;
  font-family: 'Gothic A1', sans-serif;
  color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 10px;

  .hero-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    padding: 20px;
    background-color: rgba(22, 29, 14, 0.75);
    border-radius: 12px;
  }

  .hero-content {
    padding-top: 15px;
  }

  .hero-text {
    text-align: left;
    margin-bottom: 20px;
  }
  .hero-title {
    font-weight: bold;
    font-size: 15px;
  }
  .hero-subtext {
    margin-top: 10px;
    font-size: 14px;
  }

  .hero-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
    a {
      font-size: 13px;
    }
  }

  .btn-secondary {
    border-color: #fae034;
    background-color: #fae034;
    color: #343434;
  }
  .btn-secondary:hover {
    border-color: #fff28b;
    background-color: #fff28b;
    color: #000;
  }

  @media all and (min-width: 520px) {
    justify-content: flex-end;
    padding-right: 20px;

    .hero-box {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      max-width: 480px;
      margin: 1em 0;
    }

    .hero-content {
      margin: 0 0 2em 2em;
      padding-top: 0;
    }

    .hero-title {
      font-size: 22px;
    }
    .hero-subtext {
      font-size: 16px;
    }

    .hero-buttons {
      flex-direction: row;
      a {
        font-size: 15px;
      }
    }
  }
  @media all and (min-width: 768px) {
    padding-right: 150px;
  }
`;

function ConferenceHero() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "utahjs-logo.png" }) {
        childImageSharp {
          fixed(height: 100, width: 78) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Hero>
      <div className="hero-box">
        <Img fixed={data.file.childImageSharp.fixed} alt="Utah JS Logo" />
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-title">
              2020 UtahJS Conference
              <br />
              Online Series
            </div>
            <div className="hero-subtext">Fridays in October 2020</div>
          </div>
          <div className="hero-buttons">
            <Button
              className="btn btn-primary"
              href="https://vi.to/hubs/utahjs-conference-series"
            >
              BUY TICKETS
            </Button>
            <Link className="btn btn-secondary" to="/sponsor">
              SPONSOR
            </Link>
          </div>
        </div>
      </div>
    </Hero>
  );
}

export default ConferenceHero;
