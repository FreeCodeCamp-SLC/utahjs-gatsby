import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import HeroBox from './HeroBox';

// In order to use gatsby-image and its benefits the background image is
// queried with GraphQL then fed to an Img component. The component is then
// styled to act like a background image with an absolute position and 100% coverage

const HeroStyles = styled.section`
  position: relative;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  .heroImg {
    min-width: 100%;
    height: 100%;
  }
  @media all and (min-width: 575px) {
    justify-content: left;
  }
`;

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      bg: sanityImageAsset(
        _id: {
          eq: "image-4c059eb879e46d170a994f2f9ec198d73296107c-1440x782-jpg"
        }
      ) {
        fixed(width: 1440, height: 450) {
          ...GatsbySanityImageFixed
        }
      }
    }
  `);

  return (
    <HeroStyles>
      <Img fixed={data.bg.fixed} className='heroImg' alt='Arch' />
      <HeroBox />
    </HeroStyles>
  );
};

export default Hero;
