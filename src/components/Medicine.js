import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styled from 'styled-components';
import pillImage from '../images/pillImage.png';

const MedicineBox = styled.div`
  width: 70vw;
  padding: 2.5vh 5vw;
  margin: 2vh 0;
  background: #ecf2f0;
  border-radius: 3vw;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MedicineImg = styled.div`
  width: 14vw;
  height: 14vw;
  background: #3c7466;
`;

const MedicineContent = styled.div`
  width: 48vw;
  height: 100%;
  margin-left: 2vw;

  display: flex;
  flex-direction: column;
`;

const MedicineListBtn = styled.div`
  font-size: 18px;
  color: #3c7466;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PillImage = styled.img`
  width: inherit;
  height: inherit;
`;

const MedicineTitle = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: #3c7466;
  margin-bottom: 7px;
`;
const MedicineCompany = styled.p`
  font-size: 10px;
  margin: 0;
  color: #42514d;
`;
const MedicineCode = styled.p`
  font-size: 10px;
  margin: 0;
  color: #42514d;
`;

function Medicine() {
  return (
    <MedicineBox>
      <MedicineImg>
        <PillImage src={pillImage}></PillImage>
      </MedicineImg>
      <MedicineContent>
        <MedicineTitle>모노틴정</MedicineTitle>
        <MedicineCompany>업체명 : 한미약품(주)</MedicineCompany>
        <MedicineCode>품목기준코드 : 20000000</MedicineCode>
      </MedicineContent>
      <Link to={'/'}>
        <MedicineListBtn>
          <AiFillStar />
          {/* 빈 테두리 별은 if문으로 사용 - 근데 메디저 리스트에서는 즐겨찾기라 사용하지 않음
          <AiOutlineStar /> */}
        </MedicineListBtn>
      </Link>
    </MedicineBox>
  );
}

export default Medicine;
