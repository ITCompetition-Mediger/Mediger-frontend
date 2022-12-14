import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  background-color: #00c332;
  width: 65vw;
  height: 7vh;
  padding: 0 2.5vw;
  border-radius: 0.8rem;
  color: white;
  font-size: 4vw;
  display: flex;
  justify-content: space-around;
  align-items: center;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  .NaverImage {
    height: 4vh;
  }

  .Img {
    width: 4vh;
    height: 4vh;
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

function NaverLoginButton() {
  const [logout, setLogout] = useState([]);
  const getAPI = async () => {
    const response = await fetch(`
          http://localhost:8080/logout
          `);
    const json = await response.json();
    setLogout(json.logout);
  };
  useEffect(() => {
    getAPI();
  }, []);

  return (
    <StyledLink to={`/pages/Home`}>
      <Wrapper>
        <div className="NaverImage">
          <img
            src="http://static.nid.naver.com/oauth/button_w.PNG"
            className="Img"
          ></img>
        </div>

        <div className="snsNaver">Naver로 시작하기</div>
      </Wrapper>
    </StyledLink>
  );
}

export default NaverLoginButton;
