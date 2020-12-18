import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import heroBackgr from '../images/arches-2020-hero.jpg';

// styles

const Hero = styled.section`
  background: url(${heroBackgr}) no-repeat 50% 50% / cover;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  min-height: 300px;
  height: 35vh;
  font-family: 'Gothic A1', sans-serif;
  color: #ffffff;

  .hero-box {
    display: flex;
    justify-content: space-between;
    margin-right: 150px;
    width: 480px;
    height: 240px;
    padding: 30px;
    background-color: rgba(22, 29, 14, 0.75);
    border-radius: 12px;
  }
  .hero-text {
    text-align: left;
    width: 296px;
  }
  .hero-title {
    font-weight: bold;
    font-size: 22px;
  }
  .hero-subtext {
    margin-top: 10px;
    font-size: 18px;
  }
  .hero-buttons {
    margin-top: 15px;
  }
  .hero-buttons a {
    margin-right: 6px;
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
  @media (max-width: 768px) {
    .hero-box {
      margin-right: 20px;
    }
  }
  @media (max-width: 520px) {
    justify-content: center;
    .hero-box {
      flex-direction: column;
      align-items: center;
      margin-right: 0;
      width: 408px;
    }
    .hero-title {
      font-size: 15px;
    }
    .hero-subtext {
      margin-top: 10px;
      font-size: 15px;
    }
    .hero-text,
    .hero-buttons {
      text-align: center;
    }
    img {
      height: 60px;
    }
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
        <div className="heroContent">
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
