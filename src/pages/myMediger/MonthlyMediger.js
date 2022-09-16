import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosAddCircle } from 'react-icons/io';
import styled from 'styled-components';
import NavBar from '../../components/NavBar';
import DailyMedigerWidget from '../../components/DailyMedigerWidget';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import './MonthlyCalender.css';
import moment from 'moment';
import { Mobile } from '../../components/ReactResponsive';

const MonthlyMedigerBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  //   .ContentBox {
  //     width: 85vw;
  //     padding: 0 7.5vw;
  //     margin: 2.5vh 0;
  //   }

  .TitleBox {
    width: 85vw;
    padding: 0 7.5vw;
    margin: 2vh 0;

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

  .SubTitleBox {
    width: 85vw;
    // height: 3.5vw;
    padding: 0 7.5vw;
    margin-top: 5vh;
  }

  .SubTitle {
    font-size: 4vw;
    color: #3c7466;
    margin-bottom: 0;
  }

  hr {
    width: 85vw;
    background: #3c7466;
    height: 1px;
    border: 0;
    margin-top: 0.5vh;
  }

  .ContentBox {
    width: 85vw;
    padding: 0 7.5vw;

    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: red;
  }

  .DailyMedigerBox {
    margin-bottom: 2vh;
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

function MonthlyMediger() {
  const [value, onChange] = useState(new Date());
  return (
    <Mobile>
      <MonthlyMedigerBox>
        <div className="TitleBox">
          <p className="Title">월간 메디저</p>
          <div className="PlusBtn">
            <StyledLink to="/AddToMediger">
              <IoIosAddCircle />
            </StyledLink>
          </div>
        </div>
        <Calendar
          onChange={onChange}
          formatDay={(locale, date) => moment(date).format('DD')}
          minDetail="month"
          maxDetail="month"
          // showNeighboringMonth={false}
          value={value}
        />

        <div className="DailyMedigerBox">
          <div className="SubTitleBox">
            <div className="SubTitle">{moment(value).format('YYYY/MM/DD')}</div>
            <hr />
          </div>
          <StyledLink to={`/myMediger/DailyMediger`}>
            <div className="ContentBox">
              <DailyMedigerWidget />
            </div>
          </StyledLink>
        </div>

        <NavBar />
      </MonthlyMedigerBox>
    </Mobile>
  );
}

export default MonthlyMediger;
