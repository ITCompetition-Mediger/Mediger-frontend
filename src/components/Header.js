import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Head = styled.div`
  width: 100vw;
  height: 10vh;
  background: #3c7466;
  padding: 3vh 0;
`;

const Logo = styled.p`
  margin: 0;
  padding-top: 4vh;
  font-size: 4vh;
  text-align: center;
  color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

function Header() {
  return (
    <Head>
      <StyledLink to="/">
        <Logo>Mediger</Logo>
      </StyledLink>
    </Head>
  );
}

export default Header;
