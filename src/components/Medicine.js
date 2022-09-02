import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MedicineBox = styled.div`
  width: 70vw;
  padding: 2vh 5vw;
  margin: 2vh 0;
  background: #ecf2f0;
  border-radius: 3vw;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MedicineImg = styled.div`
  width: 10vw;
  height: 10vw;
  background: red;
`;

const MedicineContent = styled.div`
  width: 50vw;
  height: 10vw;
  background: orange;
`;

const MedicineListBtn = styled.div`
  width: 5vw;
  height: 5vw;
  background: yellow;
`;

function Medicine() {
  return (
    <MedicineBox>
      <MedicineImg></MedicineImg>
      <MedicineContent></MedicineContent>
      <Link to={'/'}>
        <MedicineListBtn></MedicineListBtn>
      </Link>
    </MedicineBox>
  );
}

export default Medicine;

{
  /* 
  <div class="medicine__box">
    <div class="medicine__img">
    </div>
    <div class="medicine__content">
        <p class="medicine__title"></p>
        <p class="medicine__sale"></p>
        <p class="medicine__code"></p>
    </div>
    <div class="star__icon"></div>
  </div> 
*/
}
