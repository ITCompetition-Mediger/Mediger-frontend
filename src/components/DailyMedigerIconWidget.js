import React from 'react';
import styled from 'styled-components';
import notFoundImg from '../images/notFoundImg.png';

const IconWidget = styled.div`

  img {
    width: 9vw;
    height: 9vw;
    margin: 1vw;
    border-radius: 50%;
    background-color: white;
  }
`;

function DailyMedigerIconWidget({ coverImg }) {
  return (
    <IconWidget>
      {coverImg == 'blank' ? (
        <img src={notFoundImg}></img>
      ) : (
        <img src={coverImg}></img>
      )}
    </IconWidget>
  );
}

export default DailyMedigerIconWidget;
