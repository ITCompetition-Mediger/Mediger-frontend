import React from 'react';
import styled from 'styled-components';
import LogoImg2 from '../images/Logo2.png';

const Head = styled.div`
  width: 100vw;
  height: 8vh;
  background: #3c7466;
  padding-top: 6vh;
  padding-bottom: 1vh;

  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

const Logo = styled.p`
  margin: 0;
  font-size: 9vw;
  text-align: center;
  color: white;

  .Logo1 {
    width: 65vw;
    margin-top: 2vh;
  }

  .Logo2 {
    width: 20vw;
  }
`;

function Header() {
  return (
    <Head>
      <div>
        <Logo>
          <img src={LogoImg2} className="Logo2"></img>
        </Logo>
      </div>
    </Head>
  );
}

export default Header;
