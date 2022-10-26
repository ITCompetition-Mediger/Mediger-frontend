import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  width: 65vw;
  height: 7vh;
  padding: 0 2.5vw;
  border-radius: 0.8rem;
  color: black;
  font-size: 4vw;
  display: flex;
  justify-content: space-around;
  align-items: center;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  .GoogleImage {
    height: 3.5vh;
  }

  .Img {
    width: 3.5vh;
    height: 3.5vh;
  }
`;

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

function GoogleLoginButton() {
  const [google, setGoogle] = useState([]);
  const getAPI = async () => {
    const response = await fetch(`
    /login
          `);
    const json = await response.json();
    setGoogle(json.google);
  };
  useEffect(() => {
    getAPI();
  }, []);
  return (
    <LoginApi>
      <a target="_self" href={`${google}`}>
        <Wrapper>
          <div className="GoogleImage">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
              className="Img"
            ></img>
          </div>

          <div className="snsGoogle">Google로 시작하기</div>
        </Wrapper>
      </a>
    </LoginApi>
  );
}

export default GoogleLoginButton;