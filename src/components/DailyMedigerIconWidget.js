import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styled from 'styled-components';

const IconWidget = styled.div`
  /* width: 7vw;
  height: 7vw;
  margin: 1vw;
  border-radius: 50%;
  background-color: white; */

  img {
    width: 7vw;
    height: 7vw;
    margin: 1vw;
    border-radius: 50%;
    background-color: white;
  }
`;

function DailyMedigerIconWidget({
  coverImg = 'https://cdn-icons-png.flaticon.com/512/1536/1536592.png',
}) {
  //   console.log(coverImg);
  return (
    <IconWidget>
      <img src={coverImg}></img>
    </IconWidget>
  );
}

export default DailyMedigerIconWidget;
