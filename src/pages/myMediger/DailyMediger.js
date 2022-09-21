// 마이페이지 > 일간 메디저 페이지
import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosAddCircle } from 'react-icons/io';
import styled from 'styled-components';
import Mediger from '../../components/Mediger';
import MypageLayout from '../../components/MypageLayout';
// import MonthlyMediger from './MonthlyMediger';

const DailyMedigerBox = styled.div`
  flex-direction: column;

  .ContentBox {
    width: 85vw;
    padding: 0 7.5vw;
    margin: 4vh 0;
  }

  .TitleBox {
    width: 85vw;
    padding: 0 7.5vw;

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
    overflow: auto;

    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;
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
    <MypageLayout>
      <DailyMedigerBox>
        <div className="TitleBox ContentBox">
          <p className="Title">일간 메디저</p>
          {/* <p className="Title">{date}</p> */}
          {/* <p className="Title">
              <MonthlyMediger date={date} />
            </p> */}
          <div className="PlusBtn">
            <StyledLink to={`/myMediger/AddToMediger`}>
              <IoIosAddCircle />
            </StyledLink>
          </div>
        </div>
        <div className="ContentBox">
          <p className="SubTitle">아침</p>
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
        </div>
      </DailyMedigerBox>
    </MypageLayout>
  );
}

export default DailyMediger;
