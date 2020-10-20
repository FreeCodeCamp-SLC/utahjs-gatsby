/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import heroJS from '../images/heroJS.svg';
import heroBackgr from '../images/heroBackgr.svg';

const Hero = styled.div`
  background: url(${heroBackgr}) no-repeat 50% 50% / cover;
  position: relative;
  min-height: 300px;
  height: 35vh;
  font-family: 'Gothic A1', sans-serif;
  .hero-box {
    position: absolute;
    width: 480px;
    height: 240px;
    padding: 30px;
    background-color: rgba(22, 29, 14, 0.75);
    right: 150px;
    top: 50%;
    margin-top: -120px;
    border-radius: 12px;
  }
  .hero-box-inner {
    height: 200px;
  }
  .hero-text {
    text-align: left;
    width: 296px;
    float: right;
  }
  .hero-title {
    font-weight: bold;
    font-size: 22px;
  }
  .hero-subtext {
    margin-top: 10px;
    padding: 0;
    color: white;
    font-size: 18px;
    font-weight: normal;
  }
  .hero-buttons {
    width: 296px;
    float: right;
    margin-top: 15px;
  }
  .hero-buttons a {
    margin-right: 6px;
  }
  img {
    vertical-align: middle;
  }
  .btn btn-primary {
    color: #fff !important;
    background-color: #dd7d00 !important;
    border-color: transparent;
  }
  
  .btn btn-secondary {
    color: #222 !important;
    background-color: #fae034;
  }
`;

function ConferenceHero() {
  return (
    <Hero>
      <div className='hero-box'>
        <div className='hero-box-inner'>
          <span className='hero-box-img'>
            <img src={heroJS} alt='Utah JS Logo' />
          </span>
          <div className='hero-text'>
            <div className='hero-title'>
              2020 UtahJS Conference
              <br />
              Online Series
            </div>
            <div className='hero-subtext'>Fridays in October 2020</div>
          </div>
          <div className='hero-buttons'>
            <a
              className='btn btn-primary'
              href='https://vi.to/hubs/utahjs-conference-series'
            >
              Buy Tickets
            </a>
            <a className='btn btn-secondary' href='/sponsor'>
              Sponsor
            </a>
          </div>
        </div>
      </div>
    </Hero>
  );
}

export default ConferenceHero;
