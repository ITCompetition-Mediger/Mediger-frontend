import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    // console.log(json);
  };
  useEffect(() => {
    getAPI();
  }, []);
  return (
    // <StyledLink to={`/pages/Home`}>
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

// import React from 'react';
// import styled from 'styled-components';

// const Wrapper = styled.div`
//   width: 80%;
//   height: 7vh;
//   background-color: #f55752;
//   border-radius: 0.8rem;
//   display: flex;
//   flex-direction: row;
//   color: white;
//   font-size: 1rem;
//   font-weight: bold;
//   justify-items: center;
//   text-align: center;
//   justify-content: space-around;
//   margin: 1rem;

//   .snsGoogle {
//     margin-top: 2.2vh;
//   }
// `;

// function GoogleLoginButton() {
//   return (
//     <Wrapper>
//       <div className="GoogleImage">구글 이미지</div>
//       <div className="snsGoogle">Google 로그인</div>
//     </Wrapper>
//   );
// }

// export default GoogleLoginButton;
