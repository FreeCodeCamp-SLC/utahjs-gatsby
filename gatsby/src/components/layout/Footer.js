import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  background-color: #000;
  padding: 8px 0;
  width: 100%;
  a {
    color: #fff;
    text-decoration: underline;
    :hover {
      opacity: 0.8;
    }
  }
  p {
    margin: 0;
    line-height: 24px;
    font-size: 16px;
    color: #fff;
    text-align: center;
  }
  @media all and (min-width: 415px) {
    p {
      text-align: left;
    }
  }
`;

const Footer = () => (
  <FooterStyles>
    <div className="center-content">
      <p className="item">
        © 2021 UtahJS Built by{' '}
        <a href="https://www.alexpuhl.com/" target="_blank" rel="noreferrer">
          Alex Puhl
        </a>
        {', '}
        <a href="https://johnbowser.dev/ " target="_blank" rel="noreferrer">
          John Bowser
        </a>
        {', '}
        <a href="https://justinhoward.codes" target="_blank" rel="noreferrer">
          Justin Howard
        </a>
        {' and '}
        <a href="https://stevesaunders.dev/" target="_blank" rel="noreferrer">
          Steven Saunders
        </a>{' '}
        as part of FreeCodeCamp SLC
      </p>
    </div>
  </FooterStyles>
);

export default Footer;
