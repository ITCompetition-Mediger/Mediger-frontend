import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosAddCircle } from 'react-icons/io';
import styled from 'styled-components';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
<<<<<<< HEAD
import Mediger from '../../components/Mediger';
=======
>>>>>>> 91ba3e8 (ETC: git pull 충돌 수정)

const DailyMedigerBox = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .ContentBox {
    width: 85vw;
    padding: 0 7.5vw;
    margin: 2.5vh 0;
  }

  .TitleBox {
    width: 85vw;
    padding: 0 7.5vw;
    margin-top: 8vh;

    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .Title {
    font-size: 20px;
    font-weight: 600;
    color: #3c7466;
  }

  .PlusBtn {
    height: 25px;
    font-size: 25px;
    color: #3c7466;
  }

  .SubTitle {
    font-size: 16px;
    color: #3c7466;
    font-weight: 600;
    margin: 1vh 0;
  }

  .MedicineBox {
    width: 100%;
    height: 15vh;
<<<<<<< HEAD
    overflow: auto;
    // background-color: red;

    // display: flex;
    // flex-wrap: wrap;
    // justify-content: center;

    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;
=======
    background-color: red;
>>>>>>> 91ba3e8 (ETC: git pull 충돌 수정)
  }
`;

const StyledLink = styled(Link)`
  color: #3c7466;
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

function DailyMediger() {
  return (
    <DailyMedigerBox>
      <div className="TitleBox ContentBox">
        <p className="Title">일간 메디저</p>
        <div className="PlusBtn">
          <StyledLink to="/AddToMediger">
            <IoIosAddCircle />
          </StyledLink>
        </div>
      </div>
      <div className="ContentBox">
        <p className="SubTitle">아침</p>
<<<<<<< HEAD
        <div className="MedicineBox">
          <Mediger />
          <Mediger />
          <Mediger />
        </div>
      </div>
      <div className="ContentBox">
        <p className="SubTitle">점심</p>
        <div className="MedicineBox">
          <Mediger />
          <Mediger />
          <Mediger />
          <Mediger />
        </div>
      </div>
      <div className="ContentBox">
        <p className="SubTitle">저녁</p>
        <div className="MedicineBox">
          <Mediger />
          <Mediger />
        </div>
=======
        <div className="MedicineBox"></div>
      </div>
      <div className="ContentBox">
        <p className="SubTitle">점심</p>
        <div className="MedicineBox"></div>
      </div>
      <div className="ContentBox">
        <p className="SubTitle">저녁</p>
        <div className="MedicineBox"></div>
>>>>>>> 91ba3e8 (ETC: git pull 충돌 수정)
      </div>
      <NavBar />
    </DailyMedigerBox>
  );
}

export default DailyMediger;
