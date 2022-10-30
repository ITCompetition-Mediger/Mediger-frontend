import React from 'react';
import NavBar from '../components/NavBar';
import styled from 'styled-components';

import { Desktop, Mobile, Tablet } from '../components/ReactResponsive';
import DesktopView from '../components/DesktopView';
import TabletView from '../components/TabletView';

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
      <Mobile>
        <Main>{props.children}</Main>
        <NavBar />
      </Mobile>
      <Desktop>
        <DesktopView />
      </Desktop>
      <Tablet>
        <TabletView />
      </Tablet>
    </div>
  );
};

export default Layout;