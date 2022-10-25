import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DailyMedigerWidget from '../../components/DailyMedigerWidget';
import Calendar from 'react-calendar';
import './MonthlyCalender.css';
import moment from 'moment';
import MypageLayout from '../../components/MypageLayout';

const MonthlyMedigerBox = styled.div`
  flex-direction: column;

  .CalendarBox {
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
  // console.log(value);

  // console.log('날짜: ' + value);

  return (
    <MypageLayout>
      <MonthlyMedigerBox>
        <div className="TitleBox">
          <p className="Title">월간 메디저</p>
        </div>

        <div className="CalendarBox">
          <Calendar
            onChange={onChange}
            formatDay={(locale, date) => moment(date).format('DD')}
            minDetail="month"
            maxDetail="month"
            value={value}
          />
        </div>

        <div className="DailyMedigerBox">
          <div className="SubTitleBox">
            <div className="SubTitle">{moment(value).format('YYYY/MM/DD')}</div>
            <hr />
          </div>
          <StyledLink
            to={`/myMediger/DailyMediger/${moment(value).format('YYYY-MM-DD')}`}
          >
            <div className="ContentBox">
              <DailyMedigerWidget day={value} />
            </div>
          </StyledLink>
        </div>
      </MonthlyMedigerBox>
    </MypageLayout>
  );
}

export default MonthlyMediger;
