import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosAddCircle } from 'react-icons/io';
import styled from 'styled-components';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';

const AddToMedigerBox = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .ContentBox {
    margin: 3vh 0;
  }
  .TitleBox {
    width: 85vw;
    padding: 0 7.5vw;
    margin-top: 18vh;
  }

  .TitleBoxContent {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .MedicineToTakeBox {
    width: 85vw;
    padding: 0 7.5vw;
    // background-color: yellow;
  }

  .HowToTakeMedicineBox {
    width: 85vw;
    padding: 0 7.5vw;
    // background-color: green;
  }

  .AlarmBox {
    width: 85vw;
    padding: 0 7.5vw;
    // background-color: skyblue;
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

  hr {
    width: 85vw;
    background: #3c7466;
    height: 1px;
    border: 0;
  }

  .SubTitle {
    font-size: 16px;
    color: #3c7466;
    font-weight: 600;
    margin: 1vh 0;
  }

  .AddBox {
    width: 85vw;
    height: 8vh;
    border-radius: 10px;
    background-color: #ecf2f0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .AddBtn {
    height: 20px;
    font-size: 20px;
    color: #3c7466;
  }
`;

function AddToMediger() {
  return (
    <AddToMedigerBox>
      {/* <Header /> */}
      <div className="TitleBox ContentBox">
        <div className="TitleBoxContent">
          <p className="Title">메디저 추가</p>
          <div className="PlusBtn">
            <IoIosAddCircle />
          </div>
        </div>
        <hr></hr>
      </div>
      <div className="MedicineToTakeBox ContentBox">
        <p className="SubTitle">복용할 약</p>
        <div className="AddBox">
          <div className="AddBtn">
            <IoIosAddCircle />
          </div>
        </div>
      </div>
      <div className="HowToTakeMedicineBox ContentBox">
        <p className="SubTitle">복용 방법</p>
        {/* <input type={date}></input> */}
      </div>
      <div className="AlarmBox ContentBox">
        <p className="SubTitle">알람 설정</p>
      </div>
      <NavBar />
    </AddToMedigerBox>
  );
}

export default AddToMediger;
