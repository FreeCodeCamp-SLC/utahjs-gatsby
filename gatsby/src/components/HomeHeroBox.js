import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const HeroBoxStyles = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  color: #fff;
  background-color: rgba(22, 29, 14, 0.6);
  padding: 20px;
  max-width: 460px;
  margin: 0 auto;
  border-radius: 8px;
  font-size: 14px;
  .heroContent {
    margin-left: 30px;
  }
  h2 {
    font-size: 18px;
    font-weight: bold;
    color: white !important;
    margin: 0;
  }
  .hero_subtext {
    margin-top: 10px;
  }
  img {
    display: block;
    width: 45px;
    margin: 0 auto;
    padding-bottom: 10px;
  }
  .btn {
    display: inline-block;
    font-weight: bold;
    font-family: 'Fira Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    padding: 8px 12px;
    margin: 5px 20px 0 0;
    border: transparent;
    border-radius: 4px;
    text-transform: uppercase;
  }

  .btn:hover {
    opacity: 0.95;
    color: #fff;
  }
  .btn.yellow {
    color: #333;
    background-color: #f6e05a;
  }
  .btn.green {
    color: #fff;
    background-color: #0fa513;
  }
  @media all and (min-width: 575px) {
    font-size: 18px;
    height: 240px;
    align-items: flex-start;
    flex-direction: row;
    margin-left: 60px;
    width: 480px;
    text-align: left;
    padding: 30px;
    h2 {
      font-size: 22px;
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
          heroButtonOneText
          heroButtonOneInternalLink
          heroButtonOneExternalLink
          heroButtonOneNewTab
          heroButtonTwoText
          heroButtonTwoInternalLink
          heroButtonTwoExternalLink
          heroButtonTwoNewTab
        }
      }
      image: sanityImageAsset(
        _id: {
          eq: "image-8bba856101c44816473be120b8c5aa00fe437ba7-140x180-png"
        }
      ) {
        fixed(width: 78) {
          ...GatsbySanityImageFixed
        }
      }
    }
  `);
  const text = data.text.nodes[0];

  let buttonOne = null;
  if (text.heroButtonOneInternalLink !== null) {
    buttonOne = (
      <Link
        to={`/${text.heroButtonOneInternalLink}`}
        rel="noreferrer"
        target={text.heroButtonOneNewTab === true ? '_blank' : ''}
        className="btn yellow"
      >
        {text.heroButtonOneText}
      </Link>
    );
  } else {
    buttonOne = (
      <a
        href={text.heroButtonOneExternalLink}
        rel="noreferrer"
        target={text.heroButtonOneNewTab === true ? '_blank' : ''}
        className="btn yellow"
      >
        {text.heroButtonOneText}
      </a>
    );
  }

  let buttonTwo = null;
  if (text.heroButtonTwoInternalLink !== null) {
    buttonTwo = (
      <Link
        to={`/${text.heroButtonTwoInternalLink}`}
        rel="noreferrer"
        target={text.heroButtonTwoNewTab === true ? '_blank' : ''}
        className="btn green"
      >
        {text.heroButtonOneText}
      </Link>
    );
  } else {
    buttonTwo = (
      <a
        href={text.heroButtonTwoExternalLink}
        rel="noreferrer"
        target={text.heroButtonTwoNewTab === true ? '_blank' : ''}
        className="btn green"
      >
        {text.heroButtonTwoText}
      </a>
    );
  }

  return (
    <HeroBoxStyles>
      <div>
        <Img className="logo" fixed={data.image.fixed} alt="UtahJS Logo" />
      </div>
      <div className="heroContent">
        <h2>{text.heroHeader}</h2>
        <p className="hero_subtext">{text.heroSubtext1}</p>
        <p className="hero_subtext">{text.heroSubtext2}</p>
        {buttonOne}
        {buttonTwo}
      </div>
    </HeroBoxStyles>
  );
};
export default HeroBox;
