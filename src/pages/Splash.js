import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import LogoImg from '../images/Logo1.png';
import LogoImg2 from '../images/Logo2.png';

const intro = keyframes`    
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const fadeInLogo = keyframes`
    0% {
        opacity: 0;
        transform: translateY(5vh);
    }
    100% {
        opacity: 1;
        /* transform: translateY(-10vh); */
    }
`;
const fadeInTitle = keyframes`
    0% {
        transform: translateY(3.5vh);
        opacity: 0.3;
    }
    70% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const SplashBox = styled.div`
  margin: 0;
  padding: 0;

  .splash {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #3b7466;

    animation: ${intro} 0.5s forwards;
    animation-delay: 3.5s;
  }

  .hello {
    font-size: 4.5vw;
    color: white;
    margin: 1vh;

    opacity: 0;

    /* position: absolute; */
    animation: ${fadeInTitle} 1.5s forwards;
  }

  .logo_img {
    width: 20vh;
    height: 14vh;
    animation: ${fadeInLogo} 1.5s ease-in-out forwards;
    animation-delay: 1.3s;
    z-index: 1;

    position: absolute;
    opacity: 0;
  }

  .logo_title {
    font-size: 5vw;
    color: #ecf2f0;
    animation: tracking-out-expand 2s;
  }
`;

function Splash() {
  return (
    <SplashBox>
      <div className="splash">
        <p className="hello">오늘 먹을 약,</p>
        <p className="hello">내일 먹을 약,</p>
        <p className="hello">잊지 말고</p>
        <img src={LogoImg2} className="logo_img" />
      </div>
    </SplashBox>
  );
}

export default Splash;