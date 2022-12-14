import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLoginButton from './GoogleLoginButton';
import KakaoLoginButton from './KakaoLoginButton';
import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
to{
    top: 0;
    opacity: 1;
}
from{
    top: 30vh;
    opacity: 1;
}
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 30vh;

  display: flex;
  justify-content: center;
  align-items: center;

  .BtnBox {
    height: 30vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .Login1 {
    position: relative;
    opacity: 0;
    animation: ${slideUp} 1.5s cubic-bezier(0.415, 0.76, 0.595, 0.76) forwards;
    animation-delay: 1s;
  }
  .Login2 {
    position: relative;
    opacity: 0;
    animation: ${slideUp} 1.5s cubic-bezier(0.415, 0.76, 0.595, 0.76) forwards;
    animation-delay: 1.5s;
  }
  .Login3 {
    position: relative;
    opacity: 0;
    animation: ${slideUp} 1.5s cubic-bezier(0.415, 0.76, 0.595, 0.76) forwards;
    animation-delay: 2s;
  }
`;

const StyledLink = styled(Link)`
  color: #3c7466;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: #3c7466;
  }
`;

function LoginButton() {
  return (
    <Wrapper>
      <div class="BtnBox">
        <div class="Login1">
          <GoogleLoginButton />
        </div>
        <div class="Login2">
          <KakaoLoginButton />
        </div>
      </div>
    </Wrapper>
  );
}

export default LoginButton;
