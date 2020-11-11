import React from 'react';
import 'normalize.css';
import { useStaticQuery, graphql } from 'gatsby';
import GlobalStyles from '../styles/main';
import Header from './header';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
