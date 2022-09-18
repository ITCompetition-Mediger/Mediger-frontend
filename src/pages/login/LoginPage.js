import React from 'react';
import LoginHeader from './LoginHeader';
import styled from 'styled-components';
import LoginButton from './LoginButton';
import { Desktop, Mobile } from '../../components/ReactResponsive';
import DesktopView from '../../components/DesktopView';

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
    </div>
  );
}

export default LoginPage;
