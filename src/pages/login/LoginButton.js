import React from 'react';
import GoogleLoginButton from './GoogleLoginButton';
import KakaoLoginButton from './KakaoLoginButton';
import NaverLoginButton from './NaverLoginButton';
import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
to{
    top: 0;
    opacity: 1;
}
from{
    top: 40vh;
    opacity: 1;
}
`;

const Wrapper = styled.form`
  width: 100vw;
  height: 40vh;

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
        <div class="Login3">
          <NaverLoginButton />
        </div>
      </div>
    </Wrapper>
  );
}

export default LoginButton;

// import React from 'react';
// import GoogleLoginButton from './GoogleLoginButton';
// import KakaoLoginButton from './KakaoLoginButton';
// import NaverLoginButton from './NaverLoginButton';
// import styled from 'styled-components';

// const Wrapper = styled.form`
//     display: flex;
//     flex-direction: column;
//     padding-left: 2.5rem;
//     margin-top: 1.5rem;
// `;

// function LoginButton(){
//     return(
//         <Wrapper>
//             <KakaoLoginButton />
//             <GoogleLoginButton />
//             <NaverLoginButton />
//         </Wrapper>
//     );
// }

// export default LoginButton;
