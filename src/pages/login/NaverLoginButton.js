import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 20vw;
    height: 7vh;
    background-color: green;
    border-radius: 0.8rem;
    display: flex;
    flex-direction: row;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    justify-items: center;
    text-align: center;
    justify-content: space-around;
    margin: 1rem;

    .snsNaver {
        margin-top: 2.2vh;
    }
`;

function NaverLoginButton(){
    return(
        <Wrapper>
            <div className="NaverImage">
                네이버 이미지
            </div>
            <div className="snsNaver">
                Naver 로그인
            </div>
        </Wrapper>
    );
}

export default NaverLoginButton;