import React from 'react';
import GoogleLoginButton from './GoogleLoginButton';
import KakaoLoginButton from './KakaoLoginButton';
import NaverLoginButton from './NaverLoginButton';
import styled from 'styled-components';

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
`;

function LoginButton() {
  return (
    <Wrapper>
      <div class="BtnBox">
        <GoogleLoginButton />
        <KakaoLoginButton />
        <NaverLoginButton />
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
