import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

const HeaderStyle = styled.header`
  background: rebeccapurple;
`;

const ContainerStyle = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  padding: 1.45rem 1.0875rem;
`;

const LinkStyle = styled(GatsbyLink)`
  color: white;
  &:hover {
    text-decoration: none;
    color: white;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderStyle>
    <ContainerStyle>
      <h1 style={{ margin: 0 }}>
        <LinkStyle to="/">{siteTitle}</LinkStyle>
      </h1>
    </ContainerStyle>
  </HeaderStyle>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
