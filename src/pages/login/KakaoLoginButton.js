import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 20vw;
    height: 7vh;
    background-color: yellow;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    color: gray;
    font-size: 15px;
    font-weight: bold;
    justify-items: center;
    text-align: center;
    justify-content: space-around;
    margin: 10px;

    .snsKakao {
        margin-top: 2.2vh;
    }
`;

function KakaoLoginButton(){
    return(
        <Wrapper>
            <div className="kakaoImage">
                카카오 이미지
            </div>
            <div className="snsKakao">
                Kakao 로그인
            </div>
        </Wrapper>
    );
}

export default KakaoLoginButton;