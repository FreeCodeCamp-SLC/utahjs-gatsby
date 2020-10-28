import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  background-color: #222;
  border-radius: 8px;
  padding: 20px;

  p {
    padding: 0px;
    margin: 0px;
  }
`;

const Footer = () => (
  <FooterStyles className='about'>
    <p>
      UtahJS is a 501(c)(3) organization and contributions are tax deductible.
      We are run by a passionate group of volunteers. To help out or make a
      donation or sponsor this site or an event please contact Ken Snyder at{' '}
      <a href='mailto:ken@utahjs.com'>ken@utahjs.com</a>.
    </p>
  </FooterStyles>
);

export default Footer;
