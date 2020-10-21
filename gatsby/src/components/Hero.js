import React from 'react';
import styled from 'styled-components';
import HeroBox from './HeroBox';
import heroImg from '../images/Circuit_Board.svg';

const HeroStyles = styled.div`
  position: relative;
  max-width: 1240px;
  min-height: 320px;
  height: 35vh;
  background: url(${heroImg});
  margin: 0 auto;
`;

const Hero = () => (
  <HeroStyles>
    <HeroBox />
  </HeroStyles>
);

export default Hero;