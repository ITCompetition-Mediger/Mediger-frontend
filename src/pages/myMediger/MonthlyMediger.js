import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import './MonthlyCalender.css';
import moment from 'moment';

const MonthlyMedigerBox = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function MonthlyMediger() {
  const [value, onChange] = useState(new Date());
  return (
    <MonthlyMedigerBox>
      <Calendar
        onChange={onChange}
        formatDay={(locale, date) => moment(date).format('DD')}
        value={value}
      />
      <div className="text-gray-500 mt-4">
        {moment(value).format('YYYY년 MM월 DD일')}
      </div>
    </MonthlyMedigerBox>
  );
}

export default MonthlyMediger;
