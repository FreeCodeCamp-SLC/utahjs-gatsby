import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../images/utahjs-logo.png';

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
`;

const HeroBox = () => (
  <HeroBoxStyles>
    <img className="logo" src={logo} alt="UtahJS Logo" />
    <h2>UtahJS</h2>
    <p className="hero_subtext">JavaScript Engineers of Utah</p>
    <p className="hero_subtext">Let's learn together.</p>
    <Button className="btn yellow" href="/conference">
      Conference
    </Button>
    <Button className="btn green" href="https://slack.utahjs.com">
      Join Slack
    </Button>
  </HeroBoxStyles>
);

export default HeroBox;
