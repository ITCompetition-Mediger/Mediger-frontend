import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styled from 'styled-components';
import DailyMedigerIconWidget from '../components/DailyMedigerIconWidget';
import pillImage from '../images/pillImage.png';

const DailyWidget = styled.div`
  display: flex;

  .TimeBox {
    width: 25vw;
    height: 17vh;
    border-radius: 2vw;
    margin: 2vw;
    padding-bottom: 1vh;
    background-color: #ecf2f0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .TimeTitle {
    font-size: 3vw;
    color: #3c7466;
    margin: 2vw 0;
  }

  .MedicineBox {
    width: 23vw;
    height: 13vh;

    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;

    overflow: auto;
  }
`;

function DailyMedigerWidget() {
  return (
    <DailyWidget>
      <div className="TimeBox">
        <div className="TimeTitle">아침</div>
        <div className="MedicineBox">
          <DailyMedigerIconWidget />
          <DailyMedigerIconWidget />
          <DailyMedigerIconWidget />
          <DailyMedigerIconWidget />
          <DailyMedigerIconWidget />
        </div>
      </div>
      <div className="TimeBox">
        <div className="TimeTitle">점심</div>
        <div className="MedicineBox">
          <DailyMedigerIconWidget />
          <DailyMedigerIconWidget />
          <DailyMedigerIconWidget />
          <DailyMedigerIconWidget />
          <DailyMedigerIconWidget />
          <DailyMedigerIconWidget />
          <DailyMedigerIconWidget />
          <DailyMedigerIconWidget />
        </div>
      </div>
      <div className="TimeBox">
        <div className="TimeTitle">저녁</div>
        <div className="MedicineBox">
          <DailyMedigerIconWidget />
          <DailyMedigerIconWidget />
          <DailyMedigerIconWidget />
        </div>
      </div>
    </DailyWidget>
  );
}

export default DailyMedigerWidget;
