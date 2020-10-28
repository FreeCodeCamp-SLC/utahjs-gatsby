import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  background-color: #222;
  display: flex;
    justify-content: center;
    align-items: center;
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0.75rem 0;
    margin: 0;

    li {
      color: white;
      text-transform: uppercase;
      font-weight: 400;
      font-size: 1.25rem;
        margin-right: 1.5rem;
  }
`;

const Nav = () => (
  <NavStyles>
    <ul>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>Tickets</Link>
      </li>
      <li>
        <Link>Code of Conduct</Link>
      </li>
      <li>
        <Link>Merch</Link>
      </li>
      <li>
        <Link>Sponsor Us</Link>
      </li>
      <li>
        <Link>Past Speakers</Link>
      </li>
      <li>
        <Link>Mailing List</Link>
      </li>
      <li>
        <Link>UtahJS.com</Link>
      </li>
      <li>
        <Link>SLack</Link>
      </li>
    </ul>
  </NavStyles>
);

export default Nav;
