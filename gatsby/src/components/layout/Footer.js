import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  background-color: #000;
  padding: 8px 0;
  width: 100%;
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
      <p className="item">© 2020 UtahJS Built by FreeCodeCamp SLC</p>
    </div>
  </FooterStyles>
);

export default Footer;
