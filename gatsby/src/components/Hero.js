import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import HeroBox from './HeroBox';
import heroImg from '../images/Circuit_Board.svg';

// In order to use gatsby-image and its benefits the background image is
// queried with GraphQL then fed to an Img component. The component is then
// styled to act like a background image with an absolute position and 100% coverage

const HeroStyles = styled.div`
  position: relative;
  max-width: 1240px;
  min-height: 320px;
  height: 35vh;
  margin: 0 auto;
  z-index: 1;

  .heroImg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
  }
`;

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "arch.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <HeroStyles>
      <Img
        className="heroImg"
        fluid={data.file.childImageSharp.fluid}
        alt="Arch"
      />
      <HeroBox />
    </HeroStyles>
  );
};

export default Hero;
