import React from 'react';
import LoginHeader from './LoginHeader';
import styled from 'styled-components';
import LoginButton from './LoginButton';
import { Mobile } from '../../components/ReactResponsive';

const Wrapper = styled.form`
  align-items: center;
  justify-content: center;
`;
function LoginPage() {
  return (
    <Mobile>
      <Wrapper>
        <LoginHeader />
        <LoginButton />
      </Wrapper>
    </Mobile>
  );
}

export default LoginPage;
