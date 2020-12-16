import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  background-color: #000;
  padding: 8px 0;
  width: 100%;
  .item {
    margin: 0 10px;
    line-height: 24px;
    font-size: 14px;
    color: #fff;
    a {
      text-decoration: underline;
      color: #fff;
    }
    a:hover {
      text-decoration: underline;
      opacity: 0.8;
    }
    a.glyphicon,
    a.glyphicon:hover {
      color: #ccc;
      text-decoration: none;
      font-size: 12px;
    }
  }
`;

const Footer = () => (
  <FooterStyles>
    <div className="center-content">
      <span className="item">© 2020 UtahJS</span>
      <span className="item">
        Built by{' '}
        <a href="https://www.linkedin.com/in/barrowbrian/">Brian Barrow</a> and{' '}
        <a href="https://kendsnyder.com" target="_blank" rel="noreferrer">
          Ken Snyder
        </a>
      </span>
    </div>
  </FooterStyles>
);

export default Footer;
