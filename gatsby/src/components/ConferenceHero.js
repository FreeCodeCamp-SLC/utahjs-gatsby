import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import heroBackgr from '../images/heroBackgr.svg';

// styles

const Hero = styled.div`
  background: url(${heroBackgr}) no-repeat 50% 50% / cover;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  min-height: 300px;
  height: 35vh;
  font-family: 'Gothic A1', sans-serif;
  color: #ffffff;   
  
  #hero-box {
    display: flex;
    justify-content: space-between;
    margin-right: 150px;
    width: 480px;
    height: 240px;
    padding: 30px;
    background-color: rgba(22, 29, 14, 0.75);
    border-radius: 12px;
  }
  #hero-text {
    text-align: left;
    width: 296px;
  }
  #hero-title {
    font-weight: bold;
    font-size: 22px;
  }
  #hero-subtext {
    margin-top: 10px;
    font-size: 18px;
  }
  #hero-buttons {
    margin-top: 15px;
  }
  #hero-buttons a {
    margin-right: 6px;
  }
  a{
    text-decoration: none;
    color: #222222;
  }
  a:hover{
    text-decoration: none;
    color: #222222;
  }
  .btn.btn-primary{
    color: #ffffff;
  }
@media (max-width: 768px){
  #hero-box {
    margin-right: 20px;
  }
  @media (max-width: 520px){
  justify-content: center;
  #hero-box {
    flex-direction: column;
    align-items: center;
    margin-right: 0;
    width: 408px;
  }
  #hero-title {
    font-size: 15px;
  }
  #hero-subtext {
    margin-top: 10px;
    font-size: 15px;
  }
  #hero-text, #hero-buttons{
    text-align: center;
  }
  img{
    height: 60px;
  }
}
`;

function ConferenceHero() {
  //query for gatsby-img
  /* const data = useStaticQuery(graphql`
    query {
      imageSharp {
        fluid(maxWidth: 78) {
          ...GatsbyImageSharpFluid
       ; */
  const data = useStaticQuery(graphql`
    query {
      imageSharp {
        fixed(height: 100, width: 78) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `);

  console.log(data);
  return (
    <Hero>
      <div id='hero-box'>
        <div id='img-div'>
          {/* <Img fluid={data.imageSharp.fluid} alt='Utah JS Logo' /> */}
          {<Img fixed={data.imageSharp.fixed} alt='Utah JS Logo' />}
        </div>
        <div id='heroContent'>
          <div id='hero-text'>
            <div id='hero-title'>
              2020 UtahJS Conference
              <br />
              Online Series
            </div>
            <div id='hero-subtext'>Fridays in October 2020</div>
          </div>
          <div id='hero-buttons'>
            <Button href='https://vi.to/hubs/utahjs-conference-series'>
              BUY TICKETS
            </Button>
            <Button variant='secondary'>
              <Link to='/sponsor'>SPONSOR</Link>
            </Button>
          </div>
        </div>
      </div>
    </Hero>
  );
}

export default ConferenceHero;
