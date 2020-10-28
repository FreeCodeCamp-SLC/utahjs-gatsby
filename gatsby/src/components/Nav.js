import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  background-color: #222;
  padding: 0;
  margin: 0;

  ul {
    list-style: none;
    display: flex;
    align-items: center;

    li {
      color: white;
      text-transform: uppercase;

      + li {
        padding-left: 20px;
      }

      Link {
      }
    }
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
