import React from 'react';
import styled, { keyframes } from 'styled-components';
import LogoImg from '../../images/Logo1.png';
import LogoImg2 from '../../images/Logo2.png';

const slideIn = keyframes`
to{
    bottom: 0;
}
from{
    bottom: 70vh;
}
`;

const LoginHeaderContents = styled.div`
  width: 100%;
  height: 70vh;
  background-color: #3c7466;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;

  position: relative;
  animation: ${slideIn} 2s cubic-bezier(0.345, 0.77, 0.395, 0.92);
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  p {
    margin: 0;
  }

  .headerTitle {
    margin-top: 7vh;
  }

  .Title {
    font-size: 4vw;
  }

  .Logo2 {
    width: 80vw;
    /* width: 40vw; */
    margin-top: 1vh;
  }

  .headerSubContents {
    font-size: 15vw;
    font-weight: bolder;
  }

  hr {
    position: relative;
    top: 20vh;
    width: 100vw;
    background: white;
    height: 3px;
    border: 0;
  }

  .SubTitle {
    width: 100%;
    padding: 0 1vw;

    position: relative;
    top: 22vh;
    z-index: 1;

    background-color: #3c7466;
    text-align: center;
    font-size: 3.5vw;
  }
`;

function LoginHeader() {
  return (
    <LoginHeaderContents>
      <div className="headerTitle">
        <p className="Title">내가 먹는 약이 궁금하다면?</p>
        {/* <div className="headerSubContents">MEDIGER</div> */}
        <img src={LogoImg} className="Logo2"></img>
      </div>
      <div className="snsGuidance">
        <p className="SubTitle">SNS로 간편하게 시작하기</p>
      </div>
      <hr />
    </LoginHeaderContents>
  );
}

export default LoginHeader;
