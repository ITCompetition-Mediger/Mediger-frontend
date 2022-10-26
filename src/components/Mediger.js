// 마이페이지 > 일간 메디저 > 약 컴포넌트
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import notFoundImg from '../images/notFoundImg.png';

const MedigerBox = styled.div`
  width: 37vw;
  height: 8vh;
  margin: 1vw;
  padding: 2.5vw 1vw;
  border-radius: 2vw;
  background-color: #ecf2f0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  .MedigerImg {
    width: 10vw;
    height: 10vw;
    border-radius: 50%;
    background-color: white;

    img {
      width: 10vw;
      height: 10vw;
      border-radius: 50%;
      background-color: white;
    }
  }

  .MedigerContent {
    width: 20vw;
    height: 5vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .MedigerName {
    font-size: 3.5vw;
    font-weight: bolder;
    margin-bottom: 0.3vw;
    color: #3c7466;
  }

  .MedigerWay {
    font-size: 3vw;
    color: #42514d;
  }

  p {
    margin: 0;
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

function Mediger({ coverImg, name, many, itemSeq, how }) {
  const setHow = () => {
    if (how == 'beforeMeal') {
      how = '식전 30분';
    } else if (how == 'afterMeal') {
      how = '식후 30분';
    } else {
      how = '식사 직후';
    }
  };

  setHow();

  return (
    <StyledLink to={`/pillSearch/detail/${itemSeq}`}>
      <MedigerBox>
        <div class="MedigerImg">
          {coverImg == 'blank' ? (
            <img src={notFoundImg}></img>
          ) : (
            <img src={coverImg}></img>
          )}
        </div>
        <div class="MedigerContent">
          <p class="MedigerName">
            {name.length > 9 ? `${name.slice(0, 9)} ...` : name}
          </p>
          <p class="MedigerWay">
            {how}에,
            <br />
            {many}개 복용
          </p>
        </div>
      </MedigerBox>
    </StyledLink>
  );
}

export default Mediger;
