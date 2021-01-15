import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  background-color: #000;
  .navDiv {
    display: none;
  }

  .is-active {
    display: initial;
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
      padding: 1em 0;
      margin-right: 1.5em;
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
        @media (min-width: 520px) {
          /* font-size: 17px; */
          line-height: 1.5;
          padding: 1em 0;
        }
      }
    }
  }
  @media (min-width: 980px) {
    .navDiv {
      display: initial;
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
const Nav = ({ toggle }) => (
  <NavStyles>
    <div className={!toggle ? 'navDiv' : 'is-active'}>
      <ul>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/conference">Conferences</StyledLink>
        </li>
        <li>
          <StyledLink href="https://vi.to/hubs/utahjs-conference-series">
            Tickets
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/conduct">Code of Conduct</StyledLink>
        </li>
        <li>
          <StyledLink href="https://teespring.com/utahjs-2020-online-series">
            Merch
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/sponsor">Sponsor Us</StyledLink>
        </li>
        <li>
          <StyledLink to="/past-speakers">Past Speakers</StyledLink>
        </li>
        <li>
          <StyledLink href="http://eepurl.com/hcwmDf">Mailing List</StyledLink>
        </li>
        <li>
          <StyledLink href="http://slack.utahjs.com/">Slack</StyledLink>
        </li>
      </ul>
    </div>
  </NavStyles>
);
export default Nav;
