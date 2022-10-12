// 마이페이지 > 일간 메디저 > 약 컴포넌트
import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styled from 'styled-components';
import notFoundImg from '../images/notFoundImg.png';

const MedigerBox = styled.div`
  width: 37vw;
  height: 8vh;
  margin: 1vw;
  padding: 1vw;
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
    // background-color: blue;

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
    font-size: 2vw;
    color: #42514d;
    /* margin-top: 1vw; */
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

function Mediger({ coverImg, name, many, itemSeq }) {
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
          <p class="MedigerName">{name}</p>
          <p class="MedigerWay">{many}알 복용</p>
        </div>
      </MedigerBox>
    </StyledLink>
  );
}

export default Mediger;
