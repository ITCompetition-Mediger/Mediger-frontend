import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 65vw;
  height: 7vh;
  padding: 0 2.5vw;
  background-color: #f6e600;
  border-radius: 0.8rem;
  color: #371d15;
  font-size: 4vw;
  display: flex;
  justify-content: space-around;
  align-items: center;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  .kakaoImage {
    height: 5vh;
  }

  .Img {
    width: 5vh;
    height: 5vh;
  }
`;

const StyledLink = styled(Link)`
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

function KakaoLoginButton() {
  return (
    <StyledLink to={`/pillSearch`}>
      <Wrapper>
        <div className="kakaoImage">
          <img
            src="https://gseyecenter.com/assets/img/member/join_kakao.png"
            className="Img"
          ></img>
        </div>

        <div className="snsKakao">Kakao로 시작하기</div>
      </Wrapper>
    </StyledLink>
  );
}

export default KakaoLoginButton;
