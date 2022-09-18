import React from 'react';
import LoginHeader from './LoginHeader';
import styled from 'styled-components';
import LoginButton from './LoginButton';
import { Desktop, Mobile, Tablet} from '../../components/ReactResponsive';
import DesktopView from '../../components/DesktopView';
import TabletView from '../../components/TabletView';

const Wrapper = styled.form`
  align-items: center;
  justify-content: center;

  overflow: hidden;
`;
function LoginPage() {
  return (
    <div>
      <Mobile>
        <Wrapper>
          <LoginHeader />
          <LoginButton />
        </Wrapper>
      </Mobile>
      <Desktop>
        <DesktopView />
      </Desktop>
      <Tablet>
        <TabletView />
      </Tablet>
    </div>
  );
}

export default LoginPage;
