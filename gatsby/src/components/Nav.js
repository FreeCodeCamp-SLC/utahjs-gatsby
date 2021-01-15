import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  .navDiv {
    width: 100%;
    overflow-y: hidden;
    background-color: #000;
    position: absolute;
    transition: transform 0.3s ease-out;
  }
  .Open {
    transform: translateY(0);
    position: inherit;
  }

  .Close {
    transform: translateY(-150%);
  }

  .linkDiv {
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
      position: inherit;
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
const Nav = ({ toggle }) => (
  <NavStyles>
    <div className={!toggle ? 'navDiv Close' : 'navDiv Open'}>
      {/* <div className={!toggle ? 'navDiv' : 'is-active'}> */}
      <ul>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/conference">Conferences</StyledLink>
        </li>
        <li>
          <div
            className="linkDiv"
            href="https://vi.to/hubs/utahjs-conference-series"
          >
            Tickets
          </div>
        </li>
        <li>
          <StyledLink to="/conduct">Code of Conduct</StyledLink>
        </li>
        <li>
          <div
            className="linkDiv"
            href="https://teespring.com/utahjs-2020-online-series"
          >
            Merch
          </div>
        </li>
        <li>
          <StyledLink to="/sponsor">Sponsor Us</StyledLink>
        </li>
        <li>
          <StyledLink to="/past-speakers">Past Speakers</StyledLink>
        </li>
        <li>
          <div className="linkDiv" href="http://eepurl.com/hcwmDf">
            Mailing List
          </div>
        </li>
        <li>
          <div className="linkDiv" href="http://slack.utahjs.com/">
            Slack
          </div>
        </li>
      </ul>
    </div>
  </NavStyles>
);
export default Nav;
