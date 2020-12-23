import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  background-color: #000;

  ul {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    li {
      font-size: 17px;
      line-height: 1;
      padding: 0.7em 0;
      margin-right: 1.5em;
      a {
        font-weight: sans-serif;
        font-weight: bold;
        padding: 0;
        margin: 0;
        color: #aaa;
        text-transform: uppercase;
        cursor: pointer;
        &:hover {
          color: white;
        }
        @media (max-width: 768px) {
          font-size: 0.9rem;
        }
        @media (max-width: 662px) {
          font-size: 0.8rem;
        }
      }
    }
  }
`;

const StyledLink = styled(GatsbyLink)`
  color: #aaa;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 17px;
  &:hover {
    color: white;
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 662px) {
    font-size: 0.8rem;
  }
`;

const Nav = () => (
  <NavStyles>
    <ul>
      <li>
        <StyledLink to="/">Home</StyledLink>
      </li>
      <li>
        <StyledLink to="/conference">Conferences</StyledLink>
      </li>
      <li>
        <a href="https://vi.to/hubs/utahjs-conference-series">Tickets</a>
      </li>
      <li>
        <StyledLink to="/conduct">Code of Conduct</StyledLink>
      </li>
      <li>
        <a href="https://teespring.com/utahjs-2020-online-series">Merch</a>
      </li>
      <li>
        <StyledLink to="/sponsor">Sponsor Us</StyledLink>
      </li>
      <li>
        <StyledLink to="/past-speakers">Past Speakers</StyledLink>
      </li>
      <li>
        <a href="http://eepurl.com/hcwmDf">Mailing List</a>
      </li>
      <li>
        <a href="http://slack.utahjs.com/">Slack</a>
      </li>
    </ul>
  </NavStyles>
);

export default Nav;
