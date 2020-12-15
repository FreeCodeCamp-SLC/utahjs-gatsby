import React from 'react';
import 'normalize.css';
import GlobalStyles from '../styles/main';
import Header from './Header';

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    <main>{children}</main>
  </>
);

export default Layout;
