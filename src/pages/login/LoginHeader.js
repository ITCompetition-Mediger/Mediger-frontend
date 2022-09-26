import React from 'react';
import styled, { keyframes } from 'styled-components';
import LogoImg from '../../images/Logo1.png';
import LogoImg2 from '../../images/Logo2.png';

const slideIn = keyframes`
to{
    bottom: 0;
}
from{
    bottom: 60vh;
}
`;

const LoginHeaderContents = styled.div`
  width: 100%;
  height: 60vh;
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
    top: 15vh;
    width: 100vw;
    background: white;
    height: 3px;
    border: 0;
  }

  .SubTitle {
    width: 100%;
    padding: 0 1vw;

    position: relative;
    top: 17vh;
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

// import React from "react";
// import styled from "styled-components";

// const Wrapper = styled.form`
//     width: 100%;
//     height: 55vh;
//     background-color: #3C7466;
// `;

// const LoginHeaderContents = styled.div`
//     display: flex;
//     flex-direction: column;
//     padding-top: 10rem;
//     color: white;
//     text-align: center;

//     .headerTitle {
//         font-size: 1rem;
//         font-weight: medium;
//         padding-right: 3rem;
//     }

//     .headerSubContents {
//         font-size: 3.2rem;
//         font-weight: bold;
//     }

//     .snsGuidance {
//         padding-top: 21vh;
//         font-size: 1rem;
//         font-weight: bold;
//     }
// `;

// function LoginHeader(){
//     return(
//         <Wrapper>
//             <LoginHeaderContents>
//                 <div className="headerTitle">내가 먹는 약이 궁금하다면?</div>
//                 <div className="headerSubContents">MEDIGER</div>
//                 <div className="snsGuidance">SNS로 간편하게 시작하기</div>
//             </LoginHeaderContents>
//         </Wrapper>
//     );
// }

// export default LoginHeader;
