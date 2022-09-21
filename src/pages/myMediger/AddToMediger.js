import React from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import styled from 'styled-components';
import MypageLayout from '../../components/MypageLayout';

const AddToMedigerBox = styled.div`
  display: flex;
  flex-direction: column;

  .ContentBox {
    margin: 3vh 0;
  }

  .TitleBox {
    width: 85vw;
    padding: 0 7.5vw;
    margin-bottom: 5vh;
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

  .WayBox {
    display: flex;
    align-items: center;
    margin-bottom: 2vw;
  }

  .CalenderContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1vw 0;

    &:last-child {
      margin-left: 5vw;
    }
  }

  .SubText {
    font-size: 12px;
    color: #42514d;
  }

  .TimingSelectBox,
  .TimeSelectBox,
  .CountBox {
    border-radius: 2vw;
    padding: 1vw;
    margin-right: 3vw;
    text-align: center;
    background-color: #ecf2f0;
    color: #42514d;
    font-size: 13px;
    border: none;
  }

  .CountBox {
    margin-top: 0.4vh;
    width: 20vw;
  }

  //   캘린더 관련
  .react-datepicker-wrapper {
    width: 27vw;
  }
`;

const MyDatePicker = styled(DatePicker)`
  width: 22vw;
  margin: 0;
  padding: 1.2vw;
  border: none;
  border-radius: 2vw;
  text-align: center;
  background-color: #ecf2f0;
  color: #42514d;
  font-size: 13px;

  &:focus {
    border-color: #3c7466;
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

function AddToMediger() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <MypageLayout>
      <AddToMedigerBox>
        <div className="TitleBox">
          <div className="TitleBoxContent">
            <p className="Title">메디저 추가</p>
            <div className="PlusBtn">
              <StyledLink to={`/myMediger/DailyMediger`}>
                <IoIosAddCircle />
              </StyledLink>
            </div>
          </div>
          <hr />
        </div>

        <div className="MedicineToTakeBox ContentBox">
          <p className="SubTitle">복용할 약</p>
          <div className="AddBox">
            <div className="AddBtn">
              <StyledLink to={`/pillSearch`}>
                <IoIosAddCircle />
              </StyledLink>
            </div>
          </div>
        </div>

        <div className="HowToTakeMedicineBox ContentBox">
          <p className="SubTitle">복용 방법</p>
          <div className="WayBox">
            <div className="CalenderContainer">
              <MyDatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="yyyy.MM.dd"
                selectsStart
                startDate={startDate}
                endDate={endDate}
              />
              <div className="SubText">부터</div>
            </div>
            <div className="CalenderContainer">
              <MyDatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="yyyy.MM.dd"
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
              />
              <div className="SubText">까지</div>
            </div>
          </div>
          <div className="WayBox">
            <div className="TimeContainer">
              <select className="TimingSelectBox">
                <option value="morning">아침</option>
                <option value="lunch">점심</option>
                <option value="evening">저녁</option>
                <option value="beforeBed">자기 전</option>
              </select>
              <select className="TimeSelectBox">
                <option value="before30">식전 30분</option>
                <option value="at">식사 직후</option>
                <option value="after30">식후 30분</option>
              </select>
            </div>
            <div className="SubText">에</div>
          </div>
          <div className="WayBox">
            <div className="CountContainer">
              <input type="number" min="0" className="CountBox"></input>
            </div>
            <div className="SubText">개씩</div>
          </div>
        </div>
      </AddToMedigerBox>
    </MypageLayout>
  );
}

export default AddToMediger;
