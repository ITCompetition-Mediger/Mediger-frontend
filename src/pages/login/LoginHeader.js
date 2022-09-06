import React from "react";
import styled from "styled-components";

const Wrapper = styled.form`
    width: 25vw;
    height: 55vh;
    background-color: #3C7466;
`;

const LoginHeaderContents = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 20vh;
    color: white;
    text-align: center;

    .headerTitle {
        font-size: 15px;
        font-weight: medium;
        padding-right: 3.5rem;
    }

    .headerSubContents {
        font-size: 50px;
        font-weight: bold;
    }

    .snsGuidance {
        padding-top: 21vh;
        font-size: 15px;
    }
`;

function LoginHeader(){
    return(
        <Wrapper>
            <LoginHeaderContents>
                <div className="headerTitle">내가 먹는 약이 궁금하다면?</div>
                <div className="headerSubContents">MEDIGER</div>
                <div className="snsGuidance">SNS로 간편하게 시작하기</div>
            </LoginHeaderContents>
        </Wrapper>
    );
}

export default LoginHeader;