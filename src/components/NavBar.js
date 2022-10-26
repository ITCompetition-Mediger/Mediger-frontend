import React from 'react';
import styled from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';
import { CgPill } from 'react-icons/cg';
import { MdLocalPharmacy } from 'react-icons/md';
import { FaHeartbeat } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBarWrapper = styled.div`
  background-color: #3c7466;
  width: 100vw;
  height: 10vh;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 0;
`;

const Menu = styled.div`
  font-size: 8vw;
  text-decoration: none;
  padding: 5%;
  color: white;
  display: inline;
  font-weight: bold;
  text-decoration-line: none;
`;

function NavBar() {
  return (
    <NavBarWrapper>
      <Link to={`/pages/Home`}>
        <Menu>
          <AiOutlineHome />
        </Menu>
      </Link>

      <Link to={`/pillSearch`}>
        <Menu>
          <CgPill />
        </Menu>
      </Link>

      <Link to={`/map/pharmacy`}>
        <Menu>
          <MdLocalPharmacy />
        </Menu>
      </Link>

      <Link to={`/myMediger/Mypage`}>
        <Menu>
          <FaHeartbeat />
        </Menu>
      </Link>
    </NavBarWrapper>
  );
}

export default NavBar;