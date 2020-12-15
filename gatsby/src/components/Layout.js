import React from 'react';
import 'normalize.css';
import GlobalStyles from '../styles/main';
import Header from './Header';
import Nav from './Nav';

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    <Nav />
    <main>{children}</main>
  </>
);

export default Layout;
