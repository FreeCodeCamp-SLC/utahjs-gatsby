import React from 'react';
import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby';

import styled from 'styled-components';

const NavStyles = styled.nav`
  .navDiv {
    width: 100%;
    overflow-y: hidden;
    background-color: #000;
    position: absolute;
    transition: transform 0.3s ease-out;
    z-index: 1;
  }
  .Open {
    transform: translateY(0);
  }
  .Close {
    transform: translateY(-150%);
  }
  a {
    color: #aaa;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 13px;
    &:hover {
      color: white;
    }
    @media (min-width: 1120px) {
      font-size: 17px;
    }
  }
  ul {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
    list-style: none;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    li {
      line-height: 1;
      padding: 12px 0;
      margin-right: 25.5px;
      font-weight: 600;
      a {
        font-weight: sans-serif;
        padding: 0;
        margin: 0;
        color: #aaa;
        text-transform: uppercase;
        cursor: pointer;
        &:hover {
          color: white;
        }
      }
    }
  }
  @media (min-width: 980px) {
    .navDiv {
      transform: translateY(0);
    }
    ul {
      flex-direction: row;
    }
    li {
      padding: 0.7em 0;
    }
  }
`;
const StyledLink = styled(GatsbyLink)`
  color: #aaa;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 13px;
  &:hover {
    color: white;
  }
  @media (min-width: 1120px) {
    font-size: 17px;
  }
`;
const Nav = ({ toggle }) => {
  const { sanityNavigation } = useStaticQuery(graphql`
    query nav {
      sanityNavigation {
        link_1_text
        link_1_url
        link_1_target
        link_2_text
        link_2_url
        link_2_target
        link_3_text
        link_3_url
        link_3_target
        link_4_text
        link_4_url
        link_4_target
        link_5_text
        link_5_url
        link_5_target
        link_6_text
        link_6_url
        link_6_target
        link_7_text
        link_7_url
        link_7_target
        link_8_text
        link_8_url
        link_8_target
        link_9_text
        link_9_url
        link_9_target
      }
    }
  `);

  console.log(sanityNavigation);

  return (
    <NavStyles>
      <div className={!toggle ? 'navDiv Close' : 'navDiv Open'}>
        <ul>
          <li>
            <StyledLink
              to={sanityNavigation.link_1_url}
              target={sanityNavigation.link_1_target}
              rel="noreferrer"
            >
              {sanityNavigation.link_1_text}
            </StyledLink>
          </li>
          <li>
            <StyledLink
              to={sanityNavigation.link_2_url}
              target={sanityNavigation.link_2_target}
              rel="noreferrer"
            >
              {sanityNavigation.link_2_text}
            </StyledLink>
          </li>
          <li>
            <a
              className="linkDiv"
              href={sanityNavigation.link_3_url}
              target={sanityNavigation.link_3_target}
              rel="noreferrer"
            >
              {sanityNavigation.link_3_text}
            </a>
          </li>
          <li>
            <StyledLink
              to={sanityNavigation.link_4_url}
              target={sanityNavigation.link_4_target}
              rel="noreferrer"
            >
              {sanityNavigation.link_4_text}
            </StyledLink>
          </li>
          <li>
            <a
              className="linkDiv"
              href={sanityNavigation.link_5_url}
              target={sanityNavigation.link_5_target}
              rel="noreferrer"
            >
              {sanityNavigation.link_5_text}
            </a>
          </li>
          <li>
            <StyledLink
              to={sanityNavigation.link_6_url}
              target={sanityNavigation.link_6_target}
              rel="noreferrer"
            >
              {sanityNavigation.link_6_text}
            </StyledLink>
          </li>
          <li>
            <StyledLink
              to={sanityNavigation.link_7_url}
              target={sanityNavigation.link_7_target}
              rel="noreferrer"
            >
              {sanityNavigation.link_7_text}
            </StyledLink>
          </li>
          <li>
            <a
              className="linkDiv"
              href={sanityNavigation.link_8_url}
              target={sanityNavigation.link_8_target}
              rel="noreferrer"
            >
              {sanityNavigation.link_8_text}
            </a>
          </li>
          <li>
            <a
              className="linkDiv"
              href={sanityNavigation.link_9_url}
              target={sanityNavigation.link_9_target}
              rel="noreferrer"
            >
              {sanityNavigation.link_9_text}
            </a>
          </li>
        </ul>
      </div>
    </NavStyles>
  );
};
export default Nav;
