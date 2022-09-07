import React from "react";
import KakaoLoginButton from "./KakaoLoginButton";
import LoginHeader from "./LoginHeader";
import styled from "styled-components";
import GoogleLoginButton from "./GoogleLoginButton";
import NaverLoginButton from "./NaverLoginButton";
import LoginButton from "./LoginButton";

const Wrapper = styled.form`
    align-items: center;
    justify-content: center;
`;
function LoginPage(){
    return(
        <Wrapper>
            <LoginHeader />
            <LoginButton />
        </Wrapper>
    );
}

export default LoginPage;