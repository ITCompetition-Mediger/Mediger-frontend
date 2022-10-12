import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styled from 'styled-components';
import notFoundImg from '../images/notFoundImg.png';

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
  /* background: #3c7466; */
  background-color: white;
  border-radius: 50%;
  margin-right: 2vw;

  img {
    width: 14vw;
    height: 14vw;
    /* background: #3c7466; */
    background-color: white;
    border-radius: 50%;
    margin-right: 2vw;
  }
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

const MedicineTitle = styled.p`
  margin: 0;
  font-size: 4vw;
  font-weight: 600;
  color: #3c7466;
  margin-bottom: 7px;
`;
const MedicineCompany = styled.p`
  font-size: 3vw;
  margin: 0;
  color: #42514d;
`;
const MedicineCode = styled.p`
  font-size: 3vw;
  margin: 0;
  color: #42514d;
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

function Medicine({ coverImg, name, entpName, seq }) {
  return (
    <StyledLink to={`/pillSearch/detail`}>
      <MedicineBox>
        <MedicineImg>
          {coverImg == 'blank' ? (
            <img src={notFoundImg}></img>
          ) : (
            <img src={coverImg}></img>
          )}
        </MedicineImg>
        <MedicineContent>
          <MedicineTitle>{name}</MedicineTitle>
          <MedicineCompany>업체명 : {entpName}</MedicineCompany>
          <MedicineCode>품목기준코드 : {seq}</MedicineCode>
        </MedicineContent>
        <Link to={'/'}>
          <MedicineListBtn>
            <AiFillStar />
            {/* 빈 테두리 별은 if문으로 사용 - 근데 메디저 리스트에서는 즐겨찾기라 사용하지 않음
          <AiOutlineStar /> */}
          </MedicineListBtn>
        </Link>
      </MedicineBox>
    </StyledLink>
  );
}

export default Medicine;
