import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

// styles

const Hero = styled.section`
  background: #fff28b url(${(props) => props.imgUrl}) no-repeat 50% 50% / cover;
  font-family: 'Gothic A1', sans-serif;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 350px;
  height: 35vh;
  .hero-box {
    display: flex;
    flex-direction: column;
    height: fit-content;
    align-items: center;
    padding: 30px;
    margin: 0px 20px;
    background-color: rgba(22, 29, 14, 0.75);
    border-radius: 12px;
    width: -webkit-fill-available;
    .gatsby-image-wrapper {
      height: auto;
      width: 47px;
    }
  }
  .hero-content {
    padding-top: 20px;
    .hero-text {
      margin-bottom: 15px;
      .hero-title,
      .hero-subtext {
        text-align: center;
      }
      .hero-title {
        font-weight: bold;
        font-size: 18px;
      }
      .hero-subtext {
        margin-top: 10px;
        font-size: 16px;
      }
    }
    .hero-buttons {
      display: flex;
      flex-direction: column;
      gap: 10px;
      a {
        font-size: 16px;
      }
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

  @media (min-width: 520px) {
    justify-content: flex-end;
    .hero-box {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: flex-start;
      margin-right: 20px;
      padding-bottom: 3em;
      width: 460px;
      .gatsby-image-wrapper {
        height: auto;
        width: 95px;
      }
      .hero-content {
        padding-top: 0;
        margin-left: 50px;
        .hero-text {
          .hero-title,
          .hero-subtext {
            text-align: left;
          }
          .hero-title {
            font-size: 22px;
          }
          .hero-subtext {
            font-size: 18px;
          }
        }
      }
      .hero-buttons {
        flex-direction: row;
      }
    }
  }

  @media (min-width: 768px) {
    .hero-box {
      margin-right: 150px;
    }
  }
`;

// GraphQL Data Query //
export default function ConferenceHero() {
  const data = useStaticQuery(graphql`
    query {
      sanityConferencePage {
        id
        heroImage {
          image {
            asset {
              fluid(maxWidth: 140) {
                ...GatsbySanityImageFluid
              }
            }
          }
          alt
        }
        heroBackground {
          image {
            asset {
              fluid(maxWidth: 1440) {
                ...GatsbySanityImageFluid
              }
              url
            }
          }
          alt
        }
        title
        subTitle
        sponsorTitle
        bodyContent {
          children {
            text
          }
          _type
          _key
        }
      }
    }
  `);

  return (
    <Hero imgUrl={data.sanityConferencePage.heroBackground.image.asset.url}>
      <div className="hero-box">
        <Img
          fluid={data.sanityConferencePage.heroImage.image.asset.fluid}
          alt={data.sanityConferencePage.heroImage.alt}
        />
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-title">{data.sanityConferencePage.title}</div>
            <div className="hero-subtext">
              {data.sanityConferencePage.subTitle}
            </div>
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
