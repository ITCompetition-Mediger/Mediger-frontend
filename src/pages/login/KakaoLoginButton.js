import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import UserService from '../../services/UserService';
import { tsConstructorType } from '../../../../../../AppData/Local/Microsoft/TypeScript/4.8/node_modules/@babel/types/lib/index';

const LoginApi = styled.div`
  a {
    text-decoration: none;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
      color: #3c7466;
    }
  }
`;

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

function KakaoLoginButton() {
  const [kakao, setKakao] = useState([]);
  const getAPI = async () => {
    const response = await fetch(`
        http://localhost:8080/login
        `);
    const json = await response.json();
    setKakao(json.kakao);
    console.log(json);
  };
  useEffect(() => {
    getAPI();
  }, []);

  return (
    // <a target="_blank" href={`${kakao}`}>
    <LoginApi>
      <a target="_self" href={`${kakao}`}>
        <Wrapper>
          <div className="kakaoImage">
            <img
              src="https://gseyecenter.com/assets/img/member/join_kakao.png"
              className="Img"
            ></img>
          </div>

          <div className="snsKakao">Kakao로 시작하기</div>
        </Wrapper>
      </a>
    </LoginApi>
  );
}

export default KakaoLoginButton;
