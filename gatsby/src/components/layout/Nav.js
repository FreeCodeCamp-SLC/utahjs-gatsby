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
      text-decoration: none;
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
  const { allSanityNavigation } = useStaticQuery(graphql`
    query nav {
      allSanityNavigation(sort: { order: ASC, fields: order }) {
        nodes {
          link_text
          internal_link
          external_link
          new_tab
          order
        }
      }
    }
  `);
  const navArray = allSanityNavigation.nodes;

  return (
    <NavStyles>
      <div className={!toggle ? 'navDiv Close' : 'navDiv Open'}>
        <ul>
          {navArray.map((nav, id) => {
            // FIXME: This is a janky temp fix to change the schedule link text in the nav.
            // Looks like this can be updated by someone in sanity, then this can be removed
            nav.link_text =
              nav.link_text === '2021 Schedule'
                ? '2022 Schedule'
                : nav.link_text;
            return nav.internal_link !== null ? (
              <li key={id}>
                <StyledLink
                  to={nav.internal_link}
                  target={nav.new_tab === true ? '_blank' : ''}
                  rel="noreferrer"
                >
                  {nav.link_text}
                </StyledLink>
              </li>
            ) : (
              <li key={id}>
                <a
                  href={nav.external_link}
                  target={nav.new_tab === true ? '_blank' : ''}
                  rel="noreferrer"
                >
                  {nav.link_text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </NavStyles>
  );
};
export default Nav;
