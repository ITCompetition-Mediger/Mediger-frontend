import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styled from 'styled-components';
import notFoundImg from '../images/notFoundImg.png';

const MedigerWidget = styled.div`
  width: 18vw;
  height: 12vh;
  border-radius: 2vw;
  padding: 1vw 2.5vw;
  margin: 2vw;
  background-color: #ecf2f0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: auto;

  .MedigerImg {
    width: 13vw;
    height: 13vw;
    border-radius: 50%;
    background-color: white;
  }

  img {
    width: 13vw;
    height: 13vw;
    border-radius: 50%;
    /* background-color: #ecf2f0; */
    background-color: white;
  }

  .MedigerName {
    width: 15vw;
    margin-top: 1.2vh;
    font-size: 3vw;
    color: #3c7466;
    text-align: center;
  }
`;

function MedigerListWidget({ coverImg, name }) {
  return (
    <MedigerWidget>
      <div className="MedigerImg">
        {coverImg == 'blank' ? (
          <img src={notFoundImg}></img>
        ) : (
          <img src={coverImg}></img>
        )}
      </div>
      <div className="MedigerName">{name}</div>
    </MedigerWidget>
  );
}

export default MedigerListWidget;
