import React from 'react';
import 'normalize.css';
import GlobalStyles from '../styles/globalStyles';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    <Nav />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
