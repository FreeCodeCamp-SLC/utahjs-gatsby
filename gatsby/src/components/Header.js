import { Link, useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Wrapper = styled.div`
  background: #2b2b2b;
  header {
    max-width: 1240px;
    margin: 0 auto;
    text-align: left;
    display: flex;
    align-items: center;
    height: 100px;
    background: #2b2b2b;
  }
  .imageWrap {
    margin: 10px 18px 7px 10px;
  }
  h1 {
    color: #f7dd56;
    font-weight: bold;
    font-family: Domine, serif;
    font-size: 25px;
    margin-top: 22px;
    margin-bottom: 11px;
    margin-left: 10px;
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
      <header>
        <Link to="/">
          <div className="imageWrap">
            <Img fixed={data.utahjs.childImageSharp.fixed} alt="Utah JS Logo" />
          </div>
        </Link>
        <h1>{new Date().getFullYear()} UtahJS Conference - Online Series</h1>
      </header>
    </Wrapper>
  );
}

export default Header;
