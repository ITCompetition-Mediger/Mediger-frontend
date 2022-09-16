import React from 'react';
import NavBar from '../components/NavBar';
import styled from 'styled-components';

const Main = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = (props) => {
  return (
    <div>
      <Main>{props.children}</Main>
      <NavBar />
    </div>
  );
};

export default Layout;
