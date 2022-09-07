import React from 'react';
import styled from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';
import { CgPill } from 'react-icons/cg';
import { MdLocalPharmacy } from 'react-icons/md';
import { FaHeartbeat } from 'react-icons/fa';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 9e246d9 (ETC: git pull 충돌 수정)
=======
>>>>>>> d9d94b6 (ETC: git pull 충돌 수정)
const NavBarWrapper = styled.div`
  background-color: #3c7466;
  padding: 5px;
  text-align: center;
<<<<<<< HEAD
<<<<<<< HEAD
  width: 49vh;
  height: 3vw;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  .item {
    list-style-type: none;
  }
=======
  width: 97vw;
  height: 8vh;
=======
  width: 49vh;
  height: 3vw;
>>>>>>> d9d94b6 (ETC: git pull 충돌 수정)
  display: flex;
  justify-content: space-between;
  justify-items: center;
  .item {
    list-style-type: none;
  }
<<<<<<< HEAD

>>>>>>> 9e246d9 (ETC: git pull 충돌 수정)
=======
>>>>>>> d9d94b6 (ETC: git pull 충돌 수정)
  .itemList {
    font-size: 1.8rem;
    text-decoration: none;
    padding: 26px;
    color: white;
    display: inline;
    font-weight: bold;
    text-decoration-line: none;
  }
`;
<<<<<<< HEAD

<<<<<<< HEAD
function NavBar(){
    return(
        <NavBarWrapper>
            <ul className="item">
                <Link to={`/`}><span className="itemList"><AiOutlineHome /></span></Link>
                <Link to={`/pillSearch/detail`}><li className="itemList"><CgPill/></li></Link>
                <Link to={`/map/hospital`}><li className="itemList"><MdLocalPharmacy/></li></Link>
                <li className="itemList"><FaHeartbeat/></li>
            </ul>
        </NavBarWrapper>
    );
=======
=======
>>>>>>> 2e1215f (ETC: 코드 복붙 (App.js, NavBar.js))
function NavBar() {
  return (
    <NavBarWrapper>
      <ul className="item">
        <Link to={`/`}>
          <span className="itemList">
            <AiOutlineHome />
          </span>
        </Link>
        <Link to={`/pillSearch`}>
          <li className="itemList">
            <CgPill />
          </li>
        </Link>
        <Link to={`/pillSearch/detail`}>
          <li className="itemList">
            <CgPill />
          </li>
        </Link>
        <Link to={`/map/hospital`}>
          <li className="itemList">
            <MdLocalPharmacy />
          </li>
        </Link>
        <li className="itemList">
          <FaHeartbeat />
        </li>
      </ul>
    </NavBarWrapper>
  );
>>>>>>> 7528f61 (Feat: Mypage, MonthlyMediger 페이지 추가)
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 9e246d9 (ETC: git pull 충돌 수정)
=======
>>>>>>> d9d94b6 (ETC: git pull 충돌 수정)
export default NavBar;
