import React from 'react';
import GoogleLoginButton from './GoogleLoginButton';
import KakaoLoginButton from './KakaoLoginButton';
import NaverLoginButton from './NaverLoginButton';
import styled from 'styled-components';

const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    padding-left: 2.5rem;
    margin-top: 1.5rem;
`;

function LoginButton(){
    return(
        <Wrapper>
            <KakaoLoginButton />
            <GoogleLoginButton />
            <NaverLoginButton />
        </Wrapper>
    );
}

export default LoginButton;