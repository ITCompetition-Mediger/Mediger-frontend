import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

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

import UserService from '../../services/UserService';
import { tsConstructorType } from '../../../../../../AppData/Local/Microsoft/TypeScript/4.8/node_modules/@babel/types/lib/index';

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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    <a target="_blank" href={`${kakao}`}>
=======
    // <a target="_blank" href={`${kakao}`}>
    <a target="_self" href={`${kakao}`}>
>>>>>>> 5be1bcd (ETC: kakao 로그인 api 연결)
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
>>>>>>> 71523f1 (Feat : http-proxy-meddleware 설치 및 setProxy.js 생성)
  );
}

export default KakaoLoginButton;
