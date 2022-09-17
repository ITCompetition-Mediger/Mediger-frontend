import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import styled from 'styled-components';

const Main = styled.div`
  width: 100vw;
  height: 75vh;
  margin-bottom: 10vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = (props) => {
  return (
    <div>
      <Header />
      <Main>{props.children}</Main>
      <NavBar />
    </div>
  );
};

export default Layout;
