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
      font-size: 13px;
      line-height: 1;
      padding: 0.7em 0;
      margin-right: 1.5em;
      font-weight: 600;
      @media (max-width: 1100px) {
        font-size: 6px;
      }
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
  @media (max-width: 980px) {
    .mobile {
      display: none;
    }
  }
  .is-active {
    display: initial;
  }
  @media (max-width: 450px) {
    ul {
      flex-direction: column;
    }
    ul li{
      padding: 2em 0;
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

const Nav = (props) => (
  <NavStyles>
    <div className={!props.toggle ? 'mobile' : 'is-active'}>
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
