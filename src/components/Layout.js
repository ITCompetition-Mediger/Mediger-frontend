import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

const Layout = (props) => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <NavBar />
    </div>
  );
};

export default Layout;
