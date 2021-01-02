import React from 'react';
import { Button } from 'react-bootstrap';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const HeroBoxStyles = styled.div`
  position: absolute;
  color: #fff;
  background-color: rgba(22, 29, 14, 0.6);
  margin-top: 0;
  padding: 20px;
  top: 20px;
  right: 20px;
  left: 20px;
  width: auto;
  max-width: 480px;
  height: auto;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
  h2 {
    font-size: 18px;
    font-weight: bold;
    padding-top: 5px;
    color: white !important;
  }
  .hero_subtext {
    margin: 10px 0;
  }
  img {
    display: block;
    width: 45px;
    margin: 0 auto;
    padding-bottom: 10px;
  }
  .btn {
    display: inline-block;
    font-family: 'Fira Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    padding: 5px 9px;
    margin-right: 5px;
    border: transparent;
    border-radius: 4px;
    text-transform: uppercase;
  }
  .btn:hover {
    opacity: 0.95;
    color: #fff;
  }
  .btn.yellow {
    color: #000;
    background-color: #f6e05a;
  }
  .btn.green {
    color: #fff;
    background-color: #0fa513;
  }
  @media all and (min-width: 575px) {
    font-size: 18px;
    h2 {
      font-size: 22px;
    }
    .btn {
      margin: 0 20px;
    }
  }
  @media all and (max-width: 288px) {
    .btn {
      margin: 5px 20px;
    }
  }
`;

const HeroBox = () => {
  const data = useStaticQuery(graphql`
    query {
      text: allSanityHome {
        nodes {
          heroHeader
          heroSubtext1
          heroSubtext2
          slackUrl
        }
      }
      image: sanityImageAsset(
        _id: {
          eq: "image-8bba856101c44816473be120b8c5aa00fe437ba7-140x180-png"
        }
      ) {
        fixed(width: 78) {
          base64
          width
          height
          src
          srcSet
        }
      }
    }
  `);
  const text = data.text.nodes[0];
  return (
    <HeroBoxStyles>
      <Img className='logo' fixed={data.image.fixed} alt='UtahJS Logo' />
      <h2>{text.heroHeader}</h2>
      <p className='hero_subtext'>{text.heroSubtext1}</p>
      <p className='hero_subtext'>{text.heroSubtext2}</p>
      <Button className='btn yellow' href='/conference'>
        Conference
      </Button>
      <Button className='btn green' href={text.slackUrl}>
        Join Slack
      </Button>
    </HeroBoxStyles>
  );
};
export default HeroBox;
