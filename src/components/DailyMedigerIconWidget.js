import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styled from 'styled-components';

const IconWidget = styled.div`
  width: 7vw;
  height: 7vw;
  margin: 1vw;
  border-radius: 50%;
  background-color: white;
`;

function DailyMedigerIconWidget() {
  return <IconWidget></IconWidget>;
}

export default DailyMedigerIconWidget;
