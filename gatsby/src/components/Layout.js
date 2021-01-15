import React, { useState } from 'react';
import 'normalize.css';
import GlobalStyles from '../styles/globalStyles';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => {
  // state/function to toggle hamburger/Nav bar
  const [hamburgerState, setHamburgerState] = useState(false);
  const clickHandler = () =>
    !hamburgerState ? setHamburgerState(true) : setHamburgerState(false);

  return (
    <>
      <GlobalStyles />
      <Header clickMe={clickHandler} toggle={hamburgerState} />
      <Nav toggle={hamburgerState} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
