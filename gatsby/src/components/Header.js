import { Link, useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Wrapper = styled.header`
  background: #2b2b2b;
  .header-content {
    max-width: 1240px;
    margin: 0 auto;
    text-align: left;
    display: flex;
    align-items: center;
    height: 100px;
    background: #2b2b2b;
    padding: 20px 20px 0 20px;
  }
  .gatsby-image-wrapper {
    margin-right: 20px;
  }
  h1 {
    color: #f7dd56;
    font-weight: bold;
    font-family: Domine, serif;
    font-size: 18px;
    margin-top: 22px;
    margin-bottom: 11px;
    margin-left: 10px;
  }
  @media (min-width: 415px) {
    h1 {
      font-size: 22px;
    }
  }
  @media (min-width: 576px) {
    h1 {
      font-size: 25px;
    }
  }
`;
function Header() {
  const data = useStaticQuery(graphql`
    query {
      utahjs: file(relativePath: { eq: "utahjs-logo.png" }) {
        childImageSharp {
          fixed(height: 65, width: 51) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Wrapper>
      <div className="header-content">
        <Link to="/">
          <Img fixed={data.utahjs.childImageSharp.fixed} alt="Utah JS Logo" />
        </Link>
        <h1>{new Date().getFullYear()} UtahJS Conference - Online Series</h1>
      </div>
    </Wrapper>
  );
}
export default Header;
